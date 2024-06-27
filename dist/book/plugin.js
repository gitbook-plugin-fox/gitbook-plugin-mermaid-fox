require([
  'gitbook'
], function (gitbook) {
  gitbook.events.bind('page.change', function () {
    mermaid.run({
        querySelector: '.mermaid',
        postRenderCallback: (id) => {
		  let ele = document.getElementById(id);
          let svg = ele.getBBox();
		  let height = svg.height;
		  let aHeight = height > 800 ? 800 : height;
		  ele.setAttribute('style','height: '+aHeight+'px;overflow:scroll;');
		  let panZoomTiger = svgPanZoom('#'+id,{
			  zoomEnabled: true,
			  controlIconsEnabled: true
		  });
		  panZoomTiger.resize();
		  panZoomTiger.updateBBox();
		  
		  let download = ele.parentNode.previousSibling;
		  download.addEventListener('click',e => {
			  downloadData(id, ele);
		  });
        }
    });
  });
});

function downloadData(id,ele) {
	
	let svg = ele.cloneNode(true);
	
    // remove svg-pan-zoom-controls for the download file
	svg.getElementById("svg-pan-zoom-controls").remove();
	
	let serializer = new XMLSerializer();
	let source = serializer.serializeToString(svg);
	source = source.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	source = source.replace(/ns\d+:href/g, 'xlink:href'); // Safari NS namespace fix.


	if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
		source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
	}
	if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
		source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
	}

	let preface = '<?xml version="1.0" standalone="no"?>\r\n';
	let svgBlob = new Blob([preface, source], { type: "image/svg+xml;charset=utf-8" });
	let svgUrl = URL.createObjectURL(svgBlob);
	let downloadLink = document.createElement("a");
	let name = id + '.svg';
	
	downloadLink.download = name;
	downloadLink.href = svgUrl;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}