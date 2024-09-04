import { ArcgisMap, ArcgisSearch } from '@arcgis/map-components-react';
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import { Box } from '@mui/material';

const template = new PopupTemplate({
    title: "Flood Level - 10",
    content: "This city is at risk of flooding. The flood level is 10 m.",
});

const Map = () => {
    return (
        <Box height='50vh'>
            <ArcgisMap center={[45, 25]} zoom={5} itemId="65ffc0ee88a04f93a90668f92f846572" onArcgisViewReadyChange={(event) => {
                const map: __esri.Map = event.target.map;
                const graphicsLayer = new GraphicsLayer();
                map.add(graphicsLayer);

                const meccaPoint = new Point({
                    longitude: 39.9,
                    latitude: 21.4,
                });
                const medinaPoint = new Point({
                    longitude: 39.5,
                    latitude: 24.5,
                });
                const ryiadhPoint = new Point({
                    longitude: 46.7,
                    latitude: 24.7,
                });
                const jazanPoint = new Point({
                    longitude: 42.5,
                    latitude: 16.9,
                });
                const symbol = new SimpleMarkerSymbol({
                    color: "red",
                });
                const meccaGraphic = new Graphic({
                    geometry: meccaPoint,
                    symbol: symbol,
                    popupTemplate: template,
                });
                const medinaGraphic = new Graphic({
                    geometry: medinaPoint,
                    symbol: symbol,
                    popupTemplate: template,
                });
                const ryiadhGraphic = new Graphic({
                    geometry: ryiadhPoint,
                    symbol: symbol,
                    popupTemplate: template,
                });
                const jazanGraphic = new Graphic({
                    geometry: jazanPoint,
                    symbol: symbol,
                    popupTemplate: template,
                });
                graphicsLayer.addMany([meccaGraphic, medinaGraphic, ryiadhGraphic, jazanGraphic]);
            }}>
                <ArcgisSearch position="top-right"></ArcgisSearch>
            </ArcgisMap>
        </Box>
    )
}

export default Map