// Convert all external links to target="_blank"
function convertExternalLinks() {
  $.expr[':'].external = $.expr[':'].external || function(obj) {
      return !obj.href.match(/^mailto\:/)
             && (obj.hostname != location.hostname)
             && !obj.href.match(/^javascript\:/)
             && !obj.href.match(/^$/)
  }

  $("a:external").attr("target", "_blank")
}

// Get a specific piece of the query string
// Example:
//
// URL: http://example.com/search?q=bacon
// RUN: url_query("q")
// GET: bacon
function url_query( query ) {
  var results = new RegExp("[\\?&]"+query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]")+"=([^&#]*)").exec( window.location.href );
  return results !== null ? results[1] : false
}

// Extract just the domain from a URL
// Example:
//
// RUN: extractDomain("http://example.com/search?q=bacon")
// GET: example.com
var extractDomain = (url) => url.split('/')[url.indexOf('//') < 0 ? 0 : 2].split(/[\/?:#&]/)[0]
