module.exports = function(eleventyConfig) {
    // Set directories for input and output
    eleventyConfig.addPassthroughCopy("src/assets"); // Copy assets directly to output
  
    // Set template formats
    eleventyConfig.setTemplateFormats(["html", "md", "njk"]); // Enable HTML, Markdown, and Nunjucks
  
    // Add a custom filter to format dates
    eleventyConfig.addFilter("date", (date) => {
      return new Date(date).toLocaleDateString(); // Format date to local string
    });
  
    // Return the configuration
    return {
      dir: {
        input: "src",   // Input directory
        includes: "/_includes",
        layouts: "/_layouts",
        output: "_site" // Output directory
      },
      htmlTemplateEngine: 'njk',
    };
  };
  