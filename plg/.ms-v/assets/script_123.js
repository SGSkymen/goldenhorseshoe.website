const $doc = $(document);
const $win = $(window);


jQuery(function($) {

	//お問い合わせフォーム用
	const inputs = document.querySelectorAll('.required');
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i].querySelector('input,textarea');
		if (input.value === null || input.value === undefined || input.value === false || input.value === '') {
		} else {
			inputs[i].classList.add('in');
		}
	}

	$('.required .input').on('input', function (e) {
		if ($(this).val().length < 2) {
			$(this).parents('.required').removeClass('in');
			$(this).parents('.required').removeClass('taping');
		} else {
			$(this).parents('.required').addClass('in');
			$(this).parents('.required').addClass('taping');
		}
	});



	// グローバルメニュー
	const gmenu = document.querySelector('#gmenu');
	gmenu.addEventListener('click', (e)=>{
		const $body = document.body;
		if ($body.classList.contains('open')){
			$body.classList.remove('open');
		}else{
			$body.classList.add('open');
		}
	});

//空のパネルを追加
// 	var $grid = $('.our-brand-leftbox'),
// 			emptyCells = [],
// 			i;

// 子パネル (ul.cell) の数だけ空の子パネル (ul.cell.is-empty) を追加する。
// 	for (i = 0; i < $grid.find('.m-prof').length; i++) {
// 		emptyCells.push($('<div>', { class: 'm-prof is-empty' }));
// 	}
//
// 	$grid.append(emptyCells);

	//パララックス効果
	$(window).on('scroll', function () {
		st = $(this).scrollTop();
		TweenMax.set('.parallaxdiv', {y: -st * .2 });
	});




	let reachs = document.querySelectorAll('.border-center, .border-left');
	let controller4 = new ScrollMagic.Controller();
	for(let i = 0; i < reachs.length; i++) {
		let scene = new ScrollMagic.Scene({
			triggerElement: reachs[i],
			triggerHook: 'onEnter',
			reverse: false,
			offset: 260
		})
				// .addIndicators()
				.addTo(controller4);
		scene.on('enter', ()=>{
				reachs[i].classList.add('reach');
			const ee = ()=>{
				reachs[i].nextElementSibling.classList.add('on');
			};
				setTimeout( ee, 250);
		});
		scene.on('end', ()=>{
			scene.destroy(true);
		});
	}

	let controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", offset:"130px"}});

	new ScrollMagic.Scene({triggerElement: ""})
			.setClassToggle(".botblack", "botdown")
			// .addIndicators()
			.addTo(controller3);



	//フェードイン
	class ScrollFade {
		constructor() {
			this.ANIMATION_CLASS = 'is-animation';

			let $section = document.querySelectorAll('.fade:not(.is-animation)');
			if($section.length === null) {
				return;
			}
			let controller3 = new ScrollMagic.Controller();
			for(let i = 0; i < $section.length; i++) {
				let scene = new ScrollMagic.Scene({
					triggerElement: $section[i],
					triggerHook: 'onEnter',
					reverse: false,
					offset: 100
				})
						.addTo(controller3);
				scene.on('enter', ()=>{
					$section[i].classList.add(this.ANIMATION_CLASS);
				});
				scene.on('end', ()=>{
					scene.destroy(true);
				});
			}
		}
	}

	new ScrollFade();

	//オープンフェード
	$(document).ready(function () {
		$('.openfade').addClass('onon');
	});








	//スライダー系
	$('.slider-for').slick({
		asNavFor: '#slide',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		fade: true
	});
	$('#slide').slick({
		asNavFor: '.slider-for',
		autoplay:false,
		dots:false,
		centerMode: true,
		infinite: false,
		arrows: true,
		variableWidth: true,
		prevArrow: '<svg class="slide-arrow prev-arrow" version="1.1"\n\t xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30.9px" height="35.7px" viewBox="0 0 30.9 35.7" style="enable-background:new 0 0 30.9 35.7;"\n\t xml:space="preserve"><defs></defs><polygon class="st0yaji" points="30.9,35.7 0,17.8 30.9,0 30.9,5.3 9.2,17.8 30.9,30.4 "/></svg>',
		nextArrow: '<svg class="slide-arrow next-arrow" version="1.1"\n\t xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30.9px" height="35.7px" viewBox="0 0 30.9 35.7" style="enable-background:new 0 0 30.9 35.7;"\n\t xml:space="preserve"><defs></defs><polygon class="st0yaji" points="0,35.7 30.9,17.8 0,0 0,5.3 21.7,17.8 0,30.4 "/></svg>',
		responsive:[
			{
				breakpoint: 769,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					centerPadding: 0,
				}
			}
		]
	});
	$('#slideprof').slick({
		autoplay:false,
		dots:false,
		centerMode: true,
		infinite: false,
		arrows: true,
		variableWidth: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: '<svg class="slide-arrow prev-arrow" version="1.1"\n\t xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30.9px" height="35.7px" viewBox="0 0 30.9 35.7" style="enable-background:new 0 0 30.9 35.7;"\n\t xml:space="preserve"><defs></defs><polygon class="st0yaji" points="30.9,35.7 0,17.8 30.9,0 30.9,5.3 9.2,17.8 30.9,30.4 "/></svg>',
		nextArrow: '<svg class="slide-arrow next-arrow" version="1.1"\n\t xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30.9px" height="35.7px" viewBox="0 0 30.9 35.7" style="enable-background:new 0 0 30.9 35.7;"\n\t xml:space="preserve"><defs></defs><polygon class="st0yaji" points="0,35.7 30.9,17.8 0,0 0,5.3 21.7,17.8 0,30.4 "/></svg>',
		responsive:[
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					initialSlide: 0,
				}
			}
		]
	});
	// var $mainVisual = $('.parallaxdiv');
	// $(window).on('scroll', function () {
	// 	var st = $(this).scrollTop();
	// 	TweenMax.set($mainVisual, {
	// 		y: -st * .3
	// 	});
	// });


//画像の高さチェック
	var ch = $(".check_h").height();
	var mt = $('.slick-initialized.slick-slider').height() / 2 ;
	$('.sizez').height(ch).css({top:mt});

	$(window).on('resize', function(){
		var ch2 = $(".check_h").height();
		var mt2 = $('.slick-initialized.slick-slider').height() / 2 ;
		$('.sizez').height(ch2).css({top:mt2});
	});








	//=============

	//gmap
	var map;
	var marker = [];
	var infoWindow = [];
	// var mapLatLng = {
	// 	lat: 35.64672, // 緯度
	// 	lng: 139.7101 // 経度
	// };
	

	var mapLatLng = {
		lat: 35.65992130000001, // 緯度
		lng: 139.74176176441827 // 経度
		// 35.641567396665735, 139.71940052217667
	};
	var markerData = [ // マーカーを立てる場所名・緯度・経度
		// {
		// 	name: '代官山',
		// 	lat: 35.65199,
		// 	lng: 139.70419,
		// 	icon: 'https://gnmd.co.jp/wp-content/themes/ganymede/assets/img/gmap.svg',
		// 	link: 'https://www.google.com/maps/place/%E3%80%92150-0033+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%8C%BF%E6%A5%BD%E7%94%BA%EF%BC%94%E2%88%92%EF%BC%93+%E9%88%B4%E5%86%86%E4%BB%A3%E5%AE%98%E5%B1%B1%E3%83%93%E3%83%AB2F/@35.6520001,139.7020021,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b5b2b4df7dd:0xd6f960e8b7679b86!8m2!3d35.6519958!4d139.7041908?hl=ja'
		// },

		{
			name: '麻布台',
			lat: 35.65992130000001,
			lng: 139.74176176441827,
			icon: 'https://gnmd.co.jp/wp-content/themes/ganymede/assets/img/gmap.svg',
			link: 'https://www.google.com/maps/place/%E3%80%92106-0041+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E9%BA%BB%E5%B8%83%E5%8F%B0%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91%EF%BC%90+%E9%BA%BB%E5%B8%83%E5%81%95%E6%88%90%E3%83%93%E3%83%AB/@35.6599213,139.7417564,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b982c2f51c1:0xee092010d12c92b8!8m2!3d35.6599213!4d139.7417564!16s%2Fg%2F12hx3r9_y?entry=ttu'
		}
	];


	function initMap() {
		map = new google.maps.Map(document.getElementById('gmap'), { // 地図を埋め込む
			center: mapLatLng, // 地図の中心を指定
			zoom: 15, // 地図のズームを指定
			gestureHandling: 'auto',
			mapTypeControl: false, //マップタイプ コントロール
			fullscreenControl: false, //全画面表示コントロール
			streetViewControl: false, //ストリートビュー コントロール
			zoomControl: false, //ズーム コントロール
			styles:
			// 	{
			// 		"elementType": "labels",
			// 		"stylers": [
			// 			{
			// 				"visibility": "off"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "administrative.land_parcel",
			// 		"stylers": [
			// 			{
			// 				"visibility": "off"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "administrative.neighborhood",
			// 		"stylers": [
			// 			{
			// 				"visibility": "off"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "landscape.man_made",
			// 		"elementType": "geometry.fill",
			// 		"stylers": [
			// 			{
			// 				"weight": 1
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "poi.business",
			// 		"stylers": [
			// 			{
			// 				"visibility": "off"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "poi.park",
			// 		"elementType": "geometry.fill",
			// 		"stylers": [
			// 			{
			// 				"color": "#cccdcc"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "poi.park",
			// 		"elementType": "labels.text",
			// 		"stylers": [
			// 			{
			// 				"visibility": "off"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "transit.station.rail",
			// 		"elementType": "geometry.fill",
			// 		"stylers": [
			// 			{
			// 				"color": "#cccdcc"
			// 			}
			// 		]
			// 	},
			// 	{
			// 		"featureType": "water",
			// 		"elementType": "geometry.fill",
			// 		"stylers": [
			// 			{
			// 				"color": "#cccdcc"
			// 			}
			// 		]
			// 	}
			// ]
					[
						{
							"featureType": "administrative",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "administrative",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "administrative.land_parcel",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "administrative.neighborhood",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "landscape.man_made",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#eeeeee"
								},
								{
									"weight": 1
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi.business",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi.medical",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#cccdcc"
								}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi.school",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "poi.sports_complex",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels",
							"stylers": [
								{
									"visibility": "simplified"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"hue": "#fcd93c"
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "road.highway.controlled_access",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "transit.line",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#fcd93c"
								}
							]
						},
						{
							"featureType": "transit.station",
							"elementType": "labels.icon",
							"stylers": [
								{
									"hue": "#fcd93c"
								},
								{
									"saturation": 5
								},
								{
									"lightness": -5
								}
							]
						},
						{
							"featureType": "transit.station",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#fcd93c"
								}
							]
						},
						{
							"featureType": "transit.station.rail",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#cccdcc"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#cccdcc"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						}
					]
		});

		// マーカー毎の処理
		for (var i = 0; i < markerData.length; i++) {
			markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
			marker[i] = new google.maps.Marker({ // マーカーの追加
				position: markerLatLng, // マーカーを立てる位置を指定
				map: map // マーカーを立てる地図を指定
			});
		}


		marker[0].setOptions({// マーカーのオプション設定
			icon: new google.maps.MarkerImage(
					markerData[0]['icon'],
					new google.maps.Size(25, 35),
					new google.maps.Point(0, 0),//マーカー画像表示の起点（変更しない）
			)
		});
		// marker[1].setOptions({// マーカーのオプション設定
		// 	icon: {
		// 		url: markerData[0]['icon']// マーカーの画像を変更
		// 	}
		// });


		// google.maps.event.addListener(marker[0], 'click', clinks);
		// var clinks = function(e){
		// 	location.href = markerData[0].link;
		// }

		// マーカーに映る名前
		var infoWindow;
		infoWindow = new google.maps.InfoWindow({
			content: '<div class="mapwin">麻布台</div>'
		});
		// var infoWindow2;
		// infoWindow2 = new google.maps.InfoWindow({
		// 	content: '<div class="mapwin">白金台</div>'
		// });

		// marker[0].addListener( "onmouseover", function ( e ) {
		// 	infoWindow.open(map, marker[0]);
		// });
		google.maps.event.addListener(marker[0], 'mouseover', function(e){
			infoWindow.open(map, marker[0]);
		});


		// mouseoutイベントを取得するListenerを追加
		google.maps.event.addListener(marker[0], 'mouseout', function(e){
			infoWindow.close();
		});

		// google.maps.event.addListener(marker[1], 'mouseover', function(e){
		// 	infoWindow2.open(map, marker[1]);
		// });
		//
		// // mouseoutイベントを取得するListenerを追加
		// google.maps.event.addListener(marker[1], 'mouseout', function(e){
		// 	infoWindow2.close();
		// });

	}


	initMap();



	const nowmedia = matchMedia('(max-width: 768px)');
	const overmedia = matchMedia('(min-width: 769px)');
	nowmedia.addListener(zoomchif());
	// overmedia.addListener(zoomch(15));
	// function zoomch(){
	// 	map.setZoom(14);
	// }
	zoomchif();



	function zoomchif(){
		if(nowmedia.matches === true){
			map.setZoom(14);
		}else{
			map.setZoom(15);
		}
	}


	var data = new Array();
	// data.push ({position: new google.maps.LatLng(35.65199, 139.70419), content: '代官山'});
	data.push ({position: new google.maps.LatLng(35.65992130000001, 139.74176176441827), content: '麻布台'});

	//予備
	// marker[0].addListener( "click", function ( e ) {
	// 	open('https://www.google.com/maps/place/%E3%80%92150-0033+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%8C%BF%E6%A5%BD%E7%94%BA%EF%BC%94%E2%88%92%EF%BC%93+%E9%88%B4%E5%86%86%E4%BB%A3%E5%AE%98%E5%B1%B1%E3%83%93%E3%83%AB2F/@35.6520001,139.7020021,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b5b2b4df7dd:0xd6f960e8b7679b86!8m2!3d35.6519958!4d139.7041908?hl=ja', 'blank');
	// });

	// マーカーを押した時のリンク先
	marker[0].addListener( "click", function ( e ) {
		open('https://www.google.com/maps/place/%E3%80%92106-0041+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E9%BA%BB%E5%B8%83%E5%8F%B0%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91%EF%BC%90+%E9%BA%BB%E5%B8%83%E5%81%95%E6%88%90%E3%83%93%E3%83%AB/@35.6599213,139.7417564,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b982c2f51c1:0xee092010d12c92b8!8m2!3d35.6599213!4d139.7417564!16s%2Fg%2F12hx3r9_y?entry=ttu', 'blank');
	});



	// marker[1].addListener( "click", function ( e ) {
	// 	open("https://www.google.co.jp/maps/place/%E3%80%92108-0071+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E7%99%BD%E9%87%91%E5%8F%B0%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%92/@35.6415732,139.7172347,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b1056563919:0x6c6c4ba8e474a521!8m2!3d35.6415732!4d139.7194234?hl=ja", 'blank');
	// });

	//予備
	// marker[1].addListener( "click", function ( e ) {
	// 	open("https://www.google.co.jp/maps/place/%E3%80%92108-0071+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E7%99%BD%E9%87%91%E5%8F%B0%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%92/@35.6415732,139.7172347,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b1056563919:0x6c6c4ba8e474a521!8m2!3d35.6415732!4d139.7194234?hl=ja", 'blank');
	// });

//blacnkのないものにつける
	(() => {
		const local = location.origin;
		const aTags = document.querySelectorAll('a');
		aTags.forEach((aTag) => {
			const href = aTag.href;
			if (!href) return;

			const url = new URL(href);
			if (url.origin === local) return;
			if(!aTag.target) aTag.target = '_blank';
			aTag.rel = 'nofollow noopener';
		});
	})();

//	jQuery_end
});
