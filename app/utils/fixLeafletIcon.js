import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons in Vercel deployment
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});
