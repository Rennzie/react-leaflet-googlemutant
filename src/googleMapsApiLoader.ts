import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

/**
 * Helper tool for dynamically loading the Google Maps Api `script` tag
 */
function googleMapsApiLoader(options: LoaderOptions): void {
  const loader = new Loader(options);

  loader.load();
}

export default googleMapsApiLoader;
