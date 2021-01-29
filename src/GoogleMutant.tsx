import * as L from 'leaflet';
import type { GridLayerOptions } from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import {
  useLeafletContext,
  createElementHook,
  useLayerLifecycle,
} from '@react-leaflet/core';
import type { LeafletContextInterface } from '@react-leaflet/core';

export type GoogleMapTypes = 'satellite' | 'terrain' | 'hybrid' | 'roadmap';

export interface GoogleMutantProps extends GridLayerOptions {
  type: GoogleMapTypes;
  /** The mutant container will add its own attribution anyways. */
  attribution?: string;
  continuousWorld?: boolean;
}

function createGoogleMutant(
  { ...options }: GoogleMutantProps,
  context: LeafletContextInterface,
) {
  const instance = L.gridLayer.googleMutant({
    ...options,
  });

  return { instance, context };
}

const useGoogleMutantElement = createElementHook(createGoogleMutant);

/**
 * Uses the GoogleMutant Leaflet plugin to create a googlemaps layer
 * Requires the Google Maps JS API to be loaded as a script tag.
 *
 * All options are immutable once the layer has loaded
 *
 * Docs for L.GridLayer.GoogleMutant https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
 */
function GoogleMutant(props: GoogleMutantProps): null {
  const context = useLeafletContext();
  const elementRef = useGoogleMutantElement(props, context);
  useLayerLifecycle(elementRef.current, context);

  return null;
}

export default GoogleMutant;
