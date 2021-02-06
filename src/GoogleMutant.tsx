import * as L from 'leaflet';
import type { GridLayerOptions } from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import { updateGridLayer, createTileLayerComponent } from '@react-leaflet/core';
import type { LeafletContextInterface } from '@react-leaflet/core';

export type GoogleMapTypes = 'satellite' | 'terrain' | 'hybrid' | 'roadmap';

export interface GoogleMutantProps extends GridLayerOptions {
  type: GoogleMapTypes;
  /** The mutant container will add its own attribution anyways. */
  attribution?: string;
  continuousWorld?: boolean;
}
/**
 * Uses the GoogleMutant Leaflet plugin to create a googlemaps layer
 * Requires the Google Maps JS API to be loaded as a script tag.
 *
 * All options except `opacity` and `zIndex` are immutable once the layer has loaded with the exception
 *
 * Docs for L.GridLayer.GoogleMutant https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
 */
const GoogleMutant = createTileLayerComponent(
  ({ ...options }: GoogleMutantProps, context: LeafletContextInterface) => ({
    instance: L.gridLayer.googleMutant({
      ...options,
    }),
    context,
  }),
  updateGridLayer,
);

export default GoogleMutant;
