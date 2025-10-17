var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'รวมมิตร — หลุมบ่อ',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> รวมมิตร — หลุมบ่อ'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'รวมมิตร — เสาไฟส่องสว่าง',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> รวมมิตร — เสาไฟส่องสว่าง'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'รวมมิตร — เสาไฟแต่ง',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> รวมมิตร — เสาไฟแต่ง'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'รวมมิตร — ลูกระนาด',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> รวมมิตร — ลูกระนาด'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'รวมมิตร — ถังขยะเดี่ยว',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> รวมมิตร — ถังขยะเดี่ยว'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'รวมมิตร — ถนนแตก',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> รวมมิตร — ถนนแตก'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'รวมมิตร — จุดทิ้งขยะขนาดใหญ่',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> รวมมิตร — จุดทิ้งขยะขนาดใหญ่'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__1.set('fieldAliases', {'fid': 'fid', 'start': 'start', 'end': 'end', 'geopoint_pc1cu75': 'geopoint_pc1cu75', '_geopoint_pc1cu75_latitude': '_geopoint_pc1cu75_latitude', '_geopoint_pc1cu75_longitude': '_geopoint_pc1cu75_longitude', '_geopoint_pc1cu75_altitude': '_geopoint_pc1cu75_altitude', '_geopoint_pc1cu75_precision': '_geopoint_pc1cu75_precision', '_HA001': '_HA001', 'select_one_qb8su11': 'select_one_qb8su11', 'select_one_ee3do29': 'select_one_ee3do29', 'select_one_px8sp33': 'select_one_px8sp33', 'image_fu1qc41': 'image_fu1qc41', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'start': 'start', 'end': 'end', 'geopoint_kw8cx78': 'geopoint_kw8cx78', '_geopoint_kw8cx78_latitude': '_geopoint_kw8cx78_latitude', '_geopoint_kw8cx78_longitude': '_geopoint_kw8cx78_longitude', '_geopoint_kw8cx78_altitude': '_geopoint_kw8cx78_altitude', '_geopoint_kw8cx78_precision': '_geopoint_kw8cx78_precision', '_SA001': '_SA001', 'select_one_xn6ip62': 'select_one_xn6ip62', 'select_one_em0zq82': 'select_one_em0zq82', 'text_uc9cc62': 'text_uc9cc62', 'image_bp96p56': 'image_bp96p56', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'start': 'start', 'end': 'end', 'geopoint_kw8cx78': 'geopoint_kw8cx78', '_geopoint_kw8cx78_latitude': '_geopoint_kw8cx78_latitude', '_geopoint_kw8cx78_longitude': '_geopoint_kw8cx78_longitude', '_geopoint_kw8cx78_altitude': '_geopoint_kw8cx78_altitude', '_geopoint_kw8cx78_precision': '_geopoint_kw8cx78_precision', '_SA001': '_SA001', 'select_one_xn6ip62': 'select_one_xn6ip62', 'select_one_em0zq82': 'select_one_em0zq82', 'text_uc9cc62': 'text_uc9cc62', 'image_bp96p56': 'image_bp96p56', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'start': 'start', 'end': 'end', 'geopoint_pc1cu75': 'geopoint_pc1cu75', '_geopoint_pc1cu75_latitude': '_geopoint_pc1cu75_latitude', '_geopoint_pc1cu75_longitude': '_geopoint_pc1cu75_longitude', '_geopoint_pc1cu75_altitude': '_geopoint_pc1cu75_altitude', '_geopoint_pc1cu75_precision': '_geopoint_pc1cu75_precision', '_HA001': '_HA001', 'select_one_qb8su11': 'select_one_qb8su11', 'select_one_ee3do29': 'select_one_ee3do29', 'select_one_px8sp33': 'select_one_px8sp33', 'image_fu1qc41': 'image_fu1qc41', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'geopoint_ck1ao50': 'geopoint_ck1ao50', '_geopoint_ck1ao50_latitude': '_geopoint_ck1ao50_latitude', '_geopoint_ck1ao50_longitude': '_geopoint_ck1ao50_longitude', '_geopoint_ck1ao50_altitude': '_geopoint_ck1ao50_altitude', '_geopoint_ck1ao50_precision': '_geopoint_ck1ao50_precision', '_BA001': '_BA001', 'select_one_ks3ef39': 'select_one_ks3ef39', 'select_one_yn0wq26': 'select_one_yn0wq26', 'text_rw6mq30': 'text_rw6mq30', 'image_gt4cq53': 'image_gt4cq53', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'start': 'start', 'end': 'end', 'geopoint_pc1cu75': 'geopoint_pc1cu75', '_geopoint_pc1cu75_latitude': '_geopoint_pc1cu75_latitude', '_geopoint_pc1cu75_longitude': '_geopoint_pc1cu75_longitude', '_geopoint_pc1cu75_altitude': '_geopoint_pc1cu75_altitude', '_geopoint_pc1cu75_precision': '_geopoint_pc1cu75_precision', '_HA001': '_HA001', 'select_one_qb8su11': 'select_one_qb8su11', 'select_one_ee3do29': 'select_one_ee3do29', 'select_one_px8sp33': 'select_one_px8sp33', 'image_fu1qc41': 'image_fu1qc41', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__7.set('fieldAliases', {'fid': 'fid', 'geopoint_ck1ao50': 'geopoint_ck1ao50', '_geopoint_ck1ao50_latitude': '_geopoint_ck1ao50_latitude', '_geopoint_ck1ao50_longitude': '_geopoint_ck1ao50_longitude', '_geopoint_ck1ao50_altitude': '_geopoint_ck1ao50_altitude', '_geopoint_ck1ao50_precision': '_geopoint_ck1ao50_precision', '_BA001': '_BA001', 'select_one_ks3ef39': 'select_one_ks3ef39', 'select_one_yn0wq26': 'select_one_yn0wq26', 'text_rw6mq30': 'text_rw6mq30', 'image_gt4cq53': 'image_gt4cq53', '__version__': '__version__', 'meta/instanceID': 'meta/instanceID', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_date_modified': '_date_modified', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted_by': '_submitted_by', '_total_media': '_total_media', '_media_count': '_media_count', '_media_all_received': '_media_all_received', '_xform_id': '_xform_id', });
lyr__1.set('fieldImages', {'fid': '', 'start': '', 'end': '', 'geopoint_pc1cu75': '', '_geopoint_pc1cu75_latitude': '', '_geopoint_pc1cu75_longitude': '', '_geopoint_pc1cu75_altitude': '', '_geopoint_pc1cu75_precision': '', '_HA001': '', 'select_one_qb8su11': '', 'select_one_ee3do29': '', 'select_one_px8sp33': '', 'image_fu1qc41': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__2.set('fieldImages', {'fid': '', 'start': '', 'end': '', 'geopoint_kw8cx78': '', '_geopoint_kw8cx78_latitude': '', '_geopoint_kw8cx78_longitude': '', '_geopoint_kw8cx78_altitude': '', '_geopoint_kw8cx78_precision': '', '_SA001': '', 'select_one_xn6ip62': '', 'select_one_em0zq82': '', 'text_uc9cc62': '', 'image_bp96p56': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__3.set('fieldImages', {'fid': '', 'start': '', 'end': '', 'geopoint_kw8cx78': '', '_geopoint_kw8cx78_latitude': '', '_geopoint_kw8cx78_longitude': '', '_geopoint_kw8cx78_altitude': '', '_geopoint_kw8cx78_precision': '', '_SA001': '', 'select_one_xn6ip62': '', 'select_one_em0zq82': '', 'text_uc9cc62': '', 'image_bp96p56': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__4.set('fieldImages', {'fid': '', 'start': '', 'end': '', 'geopoint_pc1cu75': '', '_geopoint_pc1cu75_latitude': '', '_geopoint_pc1cu75_longitude': '', '_geopoint_pc1cu75_altitude': '', '_geopoint_pc1cu75_precision': '', '_HA001': '', 'select_one_qb8su11': '', 'select_one_ee3do29': '', 'select_one_px8sp33': '', 'image_fu1qc41': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__5.set('fieldImages', {'fid': '', 'geopoint_ck1ao50': '', '_geopoint_ck1ao50_latitude': '', '_geopoint_ck1ao50_longitude': '', '_geopoint_ck1ao50_altitude': '', '_geopoint_ck1ao50_precision': '', '_BA001': '', 'select_one_ks3ef39': '', 'select_one_yn0wq26': '', 'text_rw6mq30': '', 'image_gt4cq53': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__6.set('fieldImages', {'fid': '', 'start': '', 'end': '', 'geopoint_pc1cu75': '', '_geopoint_pc1cu75_latitude': '', '_geopoint_pc1cu75_longitude': '', '_geopoint_pc1cu75_altitude': '', '_geopoint_pc1cu75_precision': '', '_HA001': '', 'select_one_qb8su11': '', 'select_one_ee3do29': '', 'select_one_px8sp33': '', 'image_fu1qc41': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__7.set('fieldImages', {'fid': '', 'geopoint_ck1ao50': '', '_geopoint_ck1ao50_latitude': '', '_geopoint_ck1ao50_longitude': '', '_geopoint_ck1ao50_altitude': '', '_geopoint_ck1ao50_precision': '', '_BA001': '', 'select_one_ks3ef39': '', 'select_one_yn0wq26': '', 'text_rw6mq30': '', 'image_gt4cq53': '', '__version__': '', 'meta/instanceID': '', '_id': '', '_uuid': '', '_submission_time': '', '_date_modified': '', '_tags': '', '_notes': '', '_version': '', '_duration': '', '_submitted_by': '', '_total_media': '', '_media_count': '', '_media_all_received': '', '_xform_id': '', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'start': 'no label', 'end': 'no label', 'geopoint_pc1cu75': 'no label', '_geopoint_pc1cu75_latitude': 'no label', '_geopoint_pc1cu75_longitude': 'no label', '_geopoint_pc1cu75_altitude': 'no label', '_geopoint_pc1cu75_precision': 'no label', '_HA001': 'no label', 'select_one_qb8su11': 'no label', 'select_one_ee3do29': 'no label', 'select_one_px8sp33': 'no label', 'image_fu1qc41': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'start': 'no label', 'end': 'no label', 'geopoint_kw8cx78': 'no label', '_geopoint_kw8cx78_latitude': 'no label', '_geopoint_kw8cx78_longitude': 'no label', '_geopoint_kw8cx78_altitude': 'no label', '_geopoint_kw8cx78_precision': 'no label', '_SA001': 'no label', 'select_one_xn6ip62': 'no label', 'select_one_em0zq82': 'no label', 'text_uc9cc62': 'no label', 'image_bp96p56': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'start': 'no label', 'end': 'no label', 'geopoint_kw8cx78': 'no label', '_geopoint_kw8cx78_latitude': 'no label', '_geopoint_kw8cx78_longitude': 'no label', '_geopoint_kw8cx78_altitude': 'no label', '_geopoint_kw8cx78_precision': 'no label', '_SA001': 'no label', 'select_one_xn6ip62': 'no label', 'select_one_em0zq82': 'no label', 'text_uc9cc62': 'no label', 'image_bp96p56': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'start': 'no label', 'end': 'no label', 'geopoint_pc1cu75': 'no label', '_geopoint_pc1cu75_latitude': 'no label', '_geopoint_pc1cu75_longitude': 'no label', '_geopoint_pc1cu75_altitude': 'no label', '_geopoint_pc1cu75_precision': 'no label', '_HA001': 'no label', 'select_one_qb8su11': 'no label', 'select_one_ee3do29': 'no label', 'select_one_px8sp33': 'no label', 'image_fu1qc41': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'geopoint_ck1ao50': 'no label', '_geopoint_ck1ao50_latitude': 'no label', '_geopoint_ck1ao50_longitude': 'no label', '_geopoint_ck1ao50_altitude': 'no label', '_geopoint_ck1ao50_precision': 'no label', '_BA001': 'no label', 'select_one_ks3ef39': 'no label', 'select_one_yn0wq26': 'no label', 'text_rw6mq30': 'no label', 'image_gt4cq53': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'start': 'no label', 'end': 'no label', 'geopoint_pc1cu75': 'no label', '_geopoint_pc1cu75_latitude': 'no label', '_geopoint_pc1cu75_longitude': 'no label', '_geopoint_pc1cu75_altitude': 'no label', '_geopoint_pc1cu75_precision': 'no label', '_HA001': 'no label', 'select_one_qb8su11': 'no label', 'select_one_ee3do29': 'no label', 'select_one_px8sp33': 'no label', 'image_fu1qc41': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__7.set('fieldLabels', {'fid': 'no label', 'geopoint_ck1ao50': 'no label', '_geopoint_ck1ao50_latitude': 'no label', '_geopoint_ck1ao50_longitude': 'no label', '_geopoint_ck1ao50_altitude': 'no label', '_geopoint_ck1ao50_precision': 'no label', '_BA001': 'no label', 'select_one_ks3ef39': 'no label', 'select_one_yn0wq26': 'no label', 'text_rw6mq30': 'no label', 'image_gt4cq53': 'no label', '__version__': 'no label', 'meta/instanceID': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_date_modified': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted_by': 'no label', '_total_media': 'no label', '_media_count': 'no label', '_media_all_received': 'no label', '_xform_id': 'no label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});