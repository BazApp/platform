// fetchData.js
export async function fetchApps() {
   const response = await fetch('https://api.github.com/repos/your-username/content/contents/apps');
   const data = await response.json();
   return data; // Содержит данные о приложениях
 }
 