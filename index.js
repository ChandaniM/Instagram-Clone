window.onload=function(){
    stories();
    posts();
}
function stories(){
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
	
	var storyContainer=document.getElementsByClassName('story-subContainer');
		for (var i = 0; i<10; i++) {
			var div = document.createElement("div");//parent
				div.setAttribute('class','story-img');
			var subDiv= document.createElement("div");//child
			subDiv.setAttribute('class','img-container');
			div.appendChild(subDiv); //append child to parent
			
			var divtext=document.createElement("div");
			divtext.setAttribute('class','div-name');
			var spanbox=document.createElement("span");
			spanbox.setAttribute('class','span-name');
			divtext.appendChild(spanbox);
			div.appendChild(divtext);

			var img= document.createElement("img");// grandchild  
			subDiv.appendChild(img);
			img.setAttribute('class','story-image-in');
			img.setAttribute('alt','Images');
			img.setAttribute('src',imagesArray[i]);
			storyContainer[0].appendChild(div);//we gave parent to grandparents.lol 
		}
}
function posts(){
	var storyContainer=document.getElementsByClassName('container-box');
	 var imagesArray=[
		"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
		"https://www.thesprucepets.com/thmb/pPXXUm0Ng3Cwlcsk5iTevb41fPc=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/40386520_272666870012786_5732696489881099002_n-5b98360ac9e77c0050fa8a73.jpg",
		"https://i.pinimg.com/236x/67/a4/df/67a4dff2d17d58d0257baf079d508676--wallpaper-desktop-wallpapers.jpg",
		"https://pyxis.nymag.com/v1/imgs/3b6/d67/84797c3613ee95604b9262ce0823c67a2e-21-selena-gomez.rsquare.w330.jpg",
		"https://www.pinkvilla.com/files/styles/contentpreview/public/naagin_3_actor_pearl_v_puri_all_set_to_make_his_big_bollywood_debut_heres_what_he_has_to_say.jpg?itok=UwkSmdN8",
		"https://i.pinimg.com/236x/eb/4f/4a/eb4f4a196776660182e47719a65d44fd.jpg",
		"https://assets.capitalfm.com/2016/51/shawn-mendes-kiss-108s-jingle-ball-2016-1482391888-custom-0.jpg",
		"https://i.pinimg.com/236x/91/7e/75/917e7587aa40bb73af2b54e47cb27add.jpg",
		"https://optimizehq.imgix.net/authors/headshots/robin-sharma.jpg",
		"https://fsb.zobj.net/crop.php?r=IQZARLmTqSCbYYLfINosnDgLs0yEBteax4WB-HOvFJ38AiymyWd_KRtmR-sQc7JsYbk_2YHEq2sOyGEunqFw1pt7dd0Kdzk5pYhdn_NcTuriLn6e1p8ZmcMWWaGWJ7hBUuuKdkcWV_9reLY4"
	 ];
	 var namearr=["champaqnepapi","chandani","Taylorswift","selenagomez","pearlvpuri","tony stark","shawnmendes","zainimam_official","robinsharma","_PS_"];
	 // likes texts 
	 var namestories =["YourStory","champaqnepapi","Taylorswift","selenagomez","pearlvpuri","tony stark","shawnmendes","zainimam_official","robinsharma","_PS_"];

      var footarr1=[
	      "liked by fredvanvleet 6,592,409others",
	      "1,280likes",
	      "2,056,501 likes",
	      "13,269,506 likes",
	      "liked by chandani and 135,009 others",
	      "liked by Chris Hemsworth and 1,1760.95 others",
	      "liked by  josiahvandien and 3,122,383 others",
	      "liked by jahaanarora_official and 172,870 others",
	      "172,745 likes",
	      "144,986likes"
      ];
      //Captions texts
      var footarr2=[
	      	"champaqnepapi To be the boss I'm awful nice",
	     	"chandani Meet my new famliy member newton",
	    	"Taylorswift This is the one face I made that day .",
	     	"selenagomez I wanna hold you when I'm not supposed to………",
			"pearlvpuri Whatever we become , either good or bod we have reasons and justifications for that",
			"",
			"shawnmendes Thank you so much portland. the was crazy tonight , thank you for your patience with sound problems!! love you all",
			"zainimam_official'Get busy living or get busy dying.'--Stephen king",
			"robinsharma Nothing on the outside will ever heal a wound that exists on your inside.",
			"_PS_ May your dreams be larger than mountains may you have the courage to scale their summits."
		];
		//another footer arr
		var footarr3=[
		"View all 72 comments",
		"View all 50 comments",
		"View all 100,50 comments",
		"View all 700,20 comments",
		"View all 600,111 comments:PVP.",
		"View all 80,940 comments",
		"View all 30,940 comments.",
		"View all 75,390 comments",
		"View all 30,100 comments",
		"View all 70,120 comments"
		];
	 for (var i = 0; i<10; i++) {
		var div = document.createElement("div");
		/*post-box*/
		div.setAttribute('class','post-box');
 		var part1= document.createElement("div");//child of box (part1)head 
		//head-box
		part1.setAttribute('class','head-box');	
		var containerdiv=document.createElement('div');
		containerdiv.classList.add('container','headsection');
		let profileContainer=document.createElement('div');
		profileContainer.classList.add('profile-container');
		var img= document.createElement("img");// profile image 
		img.classList.add('profile-img');
		img.setAttribute('alt','Images');
		img.setAttribute('src',imagesArray[i]);//adds images
		/*Head profile pic */
		profileContainer.appendChild(img);
		containerdiv.appendChild(profileContainer);
		part1.appendChild(containerdiv);//add profile image
		var textmsg= document.createElement("span");//child of box (part1)head
		textmsg.setAttribute('class','text-msg');
		containerdiv.appendChild(textmsg);
		let dots=document.createElement('i');
		dots.classList.add('fa');
		dots.classList.add('fa-ellipsis-v');
		dots.style.fontSize='1.5rem';
		containerdiv.appendChild(dots);
		div.appendChild(part1);
		
		
		var part2= document.createElement("div");//anther child(part2)
		part2.setAttribute('class','img-box');
		var image= document.createElement("img");
		image.classList.add('mid-pro');
		image.setAttribute('src',imagesArray[i]);
		image.setAttribute('alt','Images');
		/*Post content*/
		part2.appendChild(image);
		/*Post*/
		div.appendChild(part2); 
		var part3= document.createElement("div");//child (part3)
		part3.setAttribute('class','foot-box');

		/*Icons div*/
		let iconstray=document.createElement('div');
		iconstray.classList.add('iconsTray');
		iconstray.classList.add('container');
		let iconssubtray=document.createElement('div');
		iconssubtray.classList.add('iconssubTray');
		iconssubtray.classList.add('flex');
		iconstray.appendChild(iconssubtray);
		/*Icons part*/
		/*heart icon is added*/
		let heart=document.createElement('i');
		heart.classList.add('fa');
		heart.classList.add('fa-heart-o');
		iconssubtray.appendChild(heart);
		heart.style.fontSize='1.5rem';

		/*comment icon is added*/
		let comment=document.createElement('i');
		comment.classList.add('fa');
		comment.classList.add('fa-comment-o');
		comment.style.fontSize='1.5rem';
		iconssubtray.appendChild(comment);

		/*share icon is added*/
		let share=document.createElement('i');
		share.classList.add('fa');
		share.classList.add('fa-location-arrow');
		share.style.fontSize='1.5rem';
		iconssubtray.appendChild(share);

		/* Bookmark icon is added*/
		let bookmark=document.createElement('i');
		bookmark.classList.add('fa');
		bookmark.classList.add('fa-bookmark-o');
		bookmark.style.fontSize='1.5rem';
		iconstray.appendChild(bookmark);
		
		/*ICons part end*/ 
		part3.appendChild(iconstray);
		textTray=document.createElement('div');
		textTray.classList.add('textTray');
		part3.appendChild(textTray);
		var bigspan=document.createElement('span');//big box
			bigspan.classList.add('span-box');
			part3.appendChild(bigspan);
		
		var spantext2= document.createElement('span');//message box
		bigspan.appendChild(spantext2);
		spantext2.classList.add('mess-box1');

		var spantext3= document.createElement('span');//message box
		bigspan.appendChild(spantext3);
		spantext3.classList.add('mess-box2');

		var spantext4= document.createElement('span');//message box
		bigspan.appendChild(spantext4);
		spantext4.classList.add('mess-box3');
		
		textTray.appendChild(bigspan);
		/*Likes container*/
		div.appendChild(part3);//In bigbox now we have to add  part3
		storyContainer[0].appendChild(div);//we gave parent to grandparents 
	}

		var spantext2=document.getElementsByClassName('mess-box1');
		var spantext3=document.getElementsByClassName('mess-box2');
		var spantext4=document.getElementsByClassName('mess-box3');
		var spanref=document.getElementsByClassName('text-msg');
		var spanstories=document.getElementsByClassName('span-name')
	for (var i =0; i<10; i++) {
			spanref[i].innerHTML=namearr[i];
			spanstories[i].innerHTML=namestories[i];

			spantext2[i].innerHTML=footarr1[i];
			spantext3[i].innerHTML=footarr2[i];
			spantext4[i].innerHTML=footarr3[i];
		}

}

function like(){
	
}