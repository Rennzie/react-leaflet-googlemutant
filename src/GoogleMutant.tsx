import * as L from 'leaflet';
import type { GridLayerOptions } from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import { updateGridLayer, createTileLayerComponent } from '@react-leaflet/core';
import type { LeafletContextInterface } from '@react-leaflet/core';

export type GoogleMapTypes = 'satellite' | 'terrain' | 'hybrid' | 'roadmap';

export interface GoogleLayerProps extends GridLayerOptions {
  type: GoogleMapTypes;
  /** The mutant container will add its own attribution anyways. */
  attribution?: string;
  continuousWorld?: boolean;
}
/**
 * Uses the GoogleLayer Leaflet plugin to create a googlemaps layer
 * Requires the Google Maps JS API to be loaded as a script tag.
 *
 * All options except `opacity` and `zIndex` are immutable once the layer has loaded with the exception
 *
 * Docs for L.GridLayer.GoogleMutant https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
 */
const GoogleLayer = createTileLayerComponent(
  ({ ...options }: GoogleLayerProps, context: LeafletContextInterface) => ({
    instance: L.gridLayer.googleMutant({
      ...options,
    }),
    context,
  }),
  updateGridLayer,
);

export default GoogleLayer;
