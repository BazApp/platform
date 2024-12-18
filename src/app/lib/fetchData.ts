import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const REPO_OWNER = 'your-username'; // Замените на имя владельца репозитория
const REPO_NAME = 'content'; // Название репозитория

// Получение списка приложений
export async function fetchApps() {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/apps`
    );
    return response.data.map((item: any) => ({
      name: item.name,
      path: item.path,
      download_url: item.download_url,
    }));
  } catch (error) {
    console.error('Ошибка при загрузке приложений:', error);
    throw error;
  }
}

// Получение подробной информации о приложении
export async function fetchAppDetails(appPath: string) {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${appPath}`
    );
    return response.data;
  } catch (error) {
    console.error(`Ошибка при загрузке данных для ${appPath}:`, error);
    throw error;
  }
}
