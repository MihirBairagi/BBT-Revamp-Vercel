// Performance monitoring utilities
import React from 'react';

class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.enabled = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_DEBUG === 'true';
  }

  // Start measuring a performance metric
  mark(name) {
    if (!this.enabled) return;
    
    const key = `${name}-start`;
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(key);
    }
    
    this.metrics.set(name, {
      startTime: Date.now(),
      name
    });
  }

  // End measuring and calculate duration
  measure(name, log = true) {
    if (!this.enabled) return 0;
    
    const startKey = `${name}-start`;
    const endKey = `${name}-end`;
    
    let duration = 0;
    
    if (typeof window !== 'undefined' && window.performance) {
      try {
        window.performance.mark(endKey);
        window.performance.measure(name, startKey, endKey);
        
        const entries = window.performance.getEntriesByName(name);
        if (entries.length > 0) {
          duration = entries[entries.length - 1].duration;
        }
      } catch (error) {
        // Fallback to manual calculation
        const metric = this.metrics.get(name);
        if (metric) {
          duration = Date.now() - metric.startTime;
        }
      }
    } else {
      const metric = this.metrics.get(name);
      if (metric) {
        duration = Date.now() - metric.startTime;
      }
    }

    if (log && duration > 0) {
      const status = duration > 1000 ? '🐌' : duration > 500 ? '⚠️' : '✅';
      console.log(`${status} Performance: ${name} took ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  // Measure API call performance
  async measureApiCall(name, apiCall) {
    if (!this.enabled) {
      return await apiCall();
    }

    this.mark(`api-${name}`);
    
    try {
      const result = await apiCall();
      const duration = this.measure(`api-${name}`);
      
      if (duration > 2000) {
        console.warn(`🚨 Slow API call detected: ${name} took ${duration.toFixed(2)}ms`);
      }
      
      return result;
    } catch (error) {
      this.measure(`api-${name}`);
      console.error(`❌ API call failed: ${name}`, error);
      throw error;
    }
  }

  // Measure component render time
  measureRender(componentName, renderFn) {
    if (!this.enabled) {
      return renderFn();
    }

    this.mark(`render-${componentName}`);
    const result = renderFn();
    const duration = this.measure(`render-${componentName}`);
    
    if (duration > 100) {
      console.warn(`⚠️ Slow render: ${componentName} took ${duration.toFixed(2)}ms`);
    }
    
    return result;
  }

  // Get Core Web Vitals
  getCoreWebVitals() {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = window.performance.getEntriesByType('navigation')[0];
    if (!navigation) return null;

    return {
      // First Contentful Paint
      fcp: this.getMetric('first-contentful-paint'),
      // Largest Contentful Paint
      lcp: this.getMetric('largest-contentful-paint'),
      // First Input Delay (not directly available, need to use other methods)
      fid: null,
      // Cumulative Layout Shift (not directly available)
      cls: null,
      // Time to Interactive (approximate)
      tti: navigation.domInteractive - navigation.fetchStart,
      // Total page load time
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      // DNS lookup time
      dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
      // Server response time
      serverTime: navigation.responseEnd - navigation.requestStart,
      // DOM processing time
      domTime: navigation.domComplete - navigation.domLoading,
    };
  }

  // Get specific performance metric
  getMetric(name) {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const entries = window.performance.getEntriesByName(name);
    return entries.length > 0 ? entries[0].startTime : null;
  }

  // Log performance summary
  logSummary() {
    if (!this.enabled) return;

    const vitals = this.getCoreWebVitals();
    if (vitals) {
      console.group('📊 Performance Summary');
      console.log('⏱️ Page Load Time:', vitals.loadTime?.toFixed(2) + 'ms');
      console.log('🎨 First Contentful Paint:', vitals.fcp?.toFixed(2) + 'ms');
      console.log('🖼️ Largest Contentful Paint:', vitals.lcp?.toFixed(2) + 'ms');
      console.log('⚡ Time to Interactive:', vitals.tti?.toFixed(2) + 'ms');
      console.log('🌐 DNS Time:', vitals.dnsTime?.toFixed(2) + 'ms');
      console.log('🖥️ Server Response Time:', vitals.serverTime?.toFixed(2) + 'ms');
      console.log('📄 DOM Processing Time:', vitals.domTime?.toFixed(2) + 'ms');
      console.groupEnd();
    }
  }

  // Clear all measurements
  clear() {
    this.metrics.clear();
    if (typeof window !== 'undefined' && window.performance) {
      try {
        window.performance.clearMarks();
        window.performance.clearMeasures();
      } catch (error) {
        // Ignore errors
      }
    }
  }
}

// Singleton instance
const performanceMonitor = new PerformanceMonitor();

// React hook for measuring component performance
export function usePerformanceMonitor(componentName) {
  const markRenderStart = () => {
    performanceMonitor.mark(`render-${componentName}`);
  };

  const markRenderEnd = () => {
    performanceMonitor.measure(`render-${componentName}`);
  };

  return { markRenderStart, markRenderEnd };
}

// Higher-order component for measuring render performance
export function withPerformanceMonitoring(WrappedComponent, componentName) {
  const name = componentName || WrappedComponent.displayName || WrappedComponent.name || 'Component';
  
  return function PerformanceMonitoredComponent(props) {
    const { markRenderStart, markRenderEnd } = usePerformanceMonitor(name);
    
    React.useEffect(() => {
      markRenderStart();
      return markRenderEnd;
    });

    return React.createElement(WrappedComponent, props);
  };
}

// Utility functions
export function measureApiCall(name, apiCall) {
  return performanceMonitor.measureApiCall(name, apiCall);
}

export function measureRender(componentName, renderFn) {
  return performanceMonitor.measureRender(componentName, renderFn);
}

export function logPerformanceSummary() {
  performanceMonitor.logSummary();
}

export function clearPerformanceMetrics() {
  performanceMonitor.clear();
}

// Image loading performance tracker
export function createImageLoadTracker() {
  const loadTimes = new Map();
  
  return {
    trackImageLoad: (src, onLoad) => {
      const startTime = Date.now();
      
      return (...args) => {
        const endTime = Date.now();
        const loadTime = endTime - startTime;
        
        loadTimes.set(src, loadTime);
        
        if (loadTime > 2000) {
          console.warn(`🖼️ Slow image load: ${src} took ${loadTime}ms`);
        }
        
        if (onLoad) {
          onLoad(...args);
        }
      };
    },
    
    getAverageLoadTime: () => {
      if (loadTimes.size === 0) return 0;
      const total = Array.from(loadTimes.values()).reduce((sum, time) => sum + time, 0);
      return total / loadTimes.size;
    },
    
    getSlowImages: (threshold = 1000) => {
      return Array.from(loadTimes.entries())
        .filter(([_, time]) => time > threshold)
        .sort((a, b) => b[1] - a[1]);
    }
  };
}

// Bundle size analyzer (development only)
export function analyzeBundleSize() {
  if (process.env.NODE_ENV !== 'development') return;
  
  console.group('📦 Bundle Analysis');
  
  // Analyze loaded modules
  if (typeof window !== 'undefined' && window.webpackJsonp) {
    const modules = window.webpackJsonp || [];
    console.log(`Loaded modules: ${modules.length}`);
  }
  
  // Check for large dependencies
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    if (script.src.includes('_next/static')) {
      console.log(`Script: ${script.src}`);
    }
  });
  
  console.groupEnd();
}

export default performanceMonitor; 