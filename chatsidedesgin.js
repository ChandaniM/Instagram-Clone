 const imagesArray=[
		"https://www.thesprucepets.com/thmb/pPXXUm0Ng3Cwlcsk5iTevb41fPc=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/40386520_272666870012786_5732696489881099002_n-5b98360ac9e77c0050fa8a73.jpg",
		"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
		"https://i.pinimg.com/236x/67/a4/df/67a4dff2d17d58d0257baf079d508676--wallpaper-desktop-wallpapers.jpg",
		"https://pyxis.nymag.com/v1/imgs/3b6/d67/84797c3613ee95604b9262ce0823c67a2e-21-selena-gomez.rsquare.w330.jpg",
		"https://www.pinkvilla.com/files/styles/contentpreview/public/naagin_3_actor_pearl_v_puri_all_set_to_make_his_big_bollywood_debut_heres_what_he_has_to_say.jpg?itok=UwkSmdN8",
		"https://i.pinimg.com/236x/eb/4f/4a/eb4f4a196776660182e47719a65d44fd.jpg",
		"https://assets.capitalfm.com/2016/51/shawn-mendes-kiss-108s-jingle-ball-2016-1482391888-custom-0.jpg",
		"https://i.pinimg.com/236x/91/7e/75/917e7587aa40bb73af2b54e47cb27add.jpg",
		"https://optimizehq.imgix.net/authors/headshots/robin-sharma.jpg",
		"https://fsb.zobj.net/crop.php?r=IQZARLmTqSCbYYLfINosnDgLs0yEBteax4WB-HOvFJ38AiymyWd_KRtmR-sQc7JsYbk_2YHEq2sOyGEunqFw1pt7dd0Kdzk5pYhdn_NcTuriLn6e1p8ZmcMWWaGWJ7hBUuuKdkcWV_9reLY4"
	];
var nameArray=["chandani","champaqnepapi","Taylorswift","selenagomez","pearlvpuri","tony stark","shawnmendes","zainimam_official","robinsharma","_PS_"];
 var storyContainer=document.getElementsByClassName('chat-view');
		for (var i = 0; i<10; i++) {
			var div = document.createElement("div");//parent
			div.classList.add('chat-list','container','flex');
			var subdiv = document.createElement("div");
			subdiv.classList.add('image-container');
			div.appendChild(subdiv); 
			var imagediv=document.createElement("img");
			imagediv.classList.add('image');
			imagediv.setAttribute('src',imagesArray[i]);
			subdiv.appendChild(imagediv);
			var subpart=document.createElement("div");
			subpart.classList.add('chat-name-list','flex');
			div.appendChild(subpart);
			var spantext=document.createElement("span");
			// spantext.classList.add('span-msg');s
			spantext.innerHTML=nameArray[i];
			subpart.appendChild(spantext);
			let camera=document.createElement('i');
		camera.classList.add('fa');
		camera.classList.add('fa-camera');
		camera.style.fontSize='1.25rem';
		subpart.appendChild(camera);
			storyContainer[0].appendChild(div);//we gave parent to grandparents.lol 
		}