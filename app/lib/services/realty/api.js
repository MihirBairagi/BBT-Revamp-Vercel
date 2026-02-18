// API service for BBT Realty form submissions

/**
 * Submit form data to the API endpoint
 * Handles both JSON and multipart/form-data (for file uploads)
 * 
 * @param {Object} options
 * @param {string} options.formType - Type of form being submitted
 * @param {Object} options.data - Form data fields
 * @param {Object} options.files - Optional file attachments
 * @returns {Promise<Object>} - API response
 */
export async function submitForm({ formType, data = {}, files = {} }) {
  const endpoint = '/api/forms';

  const hasFiles = files && Object.keys(files).some((k) => !!files[k]);
  
  if (hasFiles) {
    const form = new FormData();
    form.append('form_type', formType);
    
    // Add all data fields
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        form.append(key, String(value));
      }
    });
    
    // Add all file fields
    Object.entries(files).forEach(([key, file]) => {
      if (file) form.append(key, file);
    });

    const res = await fetch(endpoint, { method: 'POST', body: form });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Request failed: ${res.status}`);
    }
    return res.json();
  }

  // JSON fallback for forms without files
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form_type: formType, data }),
  });
  
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed: ${res.status}`);
  }
  
  return res.json();
}

