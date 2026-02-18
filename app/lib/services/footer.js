const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const footerService = {
  /**
   * Fetch all brands for footer display
   */
  async fetchBrands() {
    try {
      const response = await fetch(`${API_BASE_URL}/brands`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.brands) {
        // Filter and sort brands for footer display
        return data.brands
          .filter(brand => brand.bname && brand.posturl) // Only brands with name and URL
          .sort((a, b) => a.bname.localeCompare(b.bname)) // Sort alphabetically
          .map(brand => ({
            id: brand.id_,
            name: brand.bname,
            url: brand.posturl,
            slug: brand.posturl,
          }));
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching brands for footer:', error);
      return [];
    }
  },

  /**
   * Fetch all styles for footer display
   */
  async fetchStyles() {
    try {
      const response = await fetch(`${API_BASE_URL}/products/styles/all`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.styles) {
        // Filter and sort styles for footer display
        return data.styles
          .filter(style => style.stylename) // Only styles with name
          .sort((a, b) => a.stylename.localeCompare(b.stylename)) // Sort alphabetically
          .map(style => ({
            id: style.id_,
            name: style.stylename,
            slug: style.stylename.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
            icon: style.styleicon,
          }));
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching styles for footer:', error);
      return [];
    }
  },

  /**
   * Fetch both brands and styles together
   */
  async fetchFooterData() {
    try {
      const [brands, styles] = await Promise.all([
        this.fetchBrands(),
        this.fetchStyles(),
      ]);
      
      return {
        brands,
        styles,
      };
    } catch (error) {
      console.error('Error fetching footer data:', error);
      return {
        brands: [],
        styles: [],
      };
    }
  },
}; 