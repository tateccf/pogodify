import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
  faCloudSunRain,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';

export default function getIcon(description) {
  if (description === 'Clouds') return faCloud;
  if (description === 'Fog') return faSmog;
  if (description === 'Mist') return faSmog;
  if (description === 'Drizzle') return faSmog;
  if (description === 'Rain') return faCloudRain;
  if (description === 'Thunderstorm') return faBolt;
  if (description === 'Snow') return faSnowflake;
  return faSun;
}
