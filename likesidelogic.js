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
		"https://fsb.zobj.net/crop.php?r=IQZARLmTqSCbYYLfINosnDgLs0yEBteax4WB-HOvFJ38AiymyWd_KRtmR-sQc7JsYbk_2YHEq2sOyGEunqFw1pt7dd0Kdzk5pYhdn_NcTuriLn6e1p8ZmcMWWaGWJ7hBUuuKdkcWV_9reLY4",
	 	"https://i1.wp.com/filmitamasha.com/wp-content/uploads/2020/06/Atif-Aslam-2.jpg?fit=1024%2C1024&ssl=1&is-pending-load=1",
	 	"https://rekhtacdn.azureedge.net/Images/Shayar/munawwar-rana.png",
	 	"https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjM5ODg2MzUx/dwayne-johnson-11818916-1-402.jpg"
	 ];
var sideImage=[
		"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
		"https://www.thesprucepets.com/thmb/pPXXUm0Ng3Cwlcsk5iTevb41fPc=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/40386520_272666870012786_5732696489881099002_n-5b98360ac9e77c0050fa8a73.jpg",
		"https://i.pinimg.com/236x/67/a4/df/67a4dff2d17d58d0257baf079d508676--wallpaper-desktop-wallpapers.jpg",
		"https://pyxis.nymag.com/v1/imgs/3b6/d67/84797c3613ee95604b9262ce0823c67a2e-21-selena-gomez.rsquare.w330.jpg",
		"https://www.pinkvilla.com/files/styles/contentpreview/public/naagin_3_actor_pearl_v_puri_all_set_to_make_his_big_bollywood_debut_heres_what_he_has_to_say.jpg?itok=UwkSmdN8",
		"https://i.pinimg.com/236x/eb/4f/4a/eb4f4a196776660182e47719a65d44fd.jpg",
		"https://assets.capitalfm.com/2016/51/shawn-mendes-kiss-108s-jingle-ball-2016-1482391888-custom-0.jpg",
		"https://i.pinimg.com/236x/91/7e/75/917e7587aa40bb73af2b54e47cb27add.jpg",
		"https://optimizehq.imgix.net/authors/headshots/robin-sharma.jpg",
		"https://fsb.zobj.net/crop.php?r=IQZARLmTqSCbYYLfINosnDgLs0yEBteax4WB-HOvFJ38AiymyWd_KRtmR-sQc7JsYbk_2YHEq2sOyGEunqFw1pt7dd0Kdzk5pYhdn_NcTuriLn6e1p8ZmcMWWaGWJ7hBUuuKdkcWV_9reLY4",
		"https://webneel.com/daily/sites/default/files/images/daily/09-2014/3-nature-photography-pedraterrinha.jpg"
	 ];
var spanmsg=["champaqnepapi liked your comment:awesome song sir!.","pearlvpuri mentioned you in a comment: @chandani","Taylorswift liked your comment:your eyes are just fire.","selenagomez liked your comment: your new album was aswesome.","pearlvpuri,tony stark and 10,550other like your photo","tony stark liked your comment:your new moive was amzaing.!!!","shawnmendes,_PS_ and 100other like your video","zainimam_official mentioned you in a comment:@pearlvpuri","robinsharma comment:yes man you are correct.","_PS_,photoshoot_123 and 10,150other like your photo"];


 var likeContainer=document.getElementsByClassName('like-container');
		for (var i = 0; i<20; i++) {
			var div = document.createElement("div");//parent
			div.classList.add('like-side','container','flex');
			var imageContainer=document.createElement("div");//image container
			imageContainer.classList.add('image-container');
			var img=document.createElement('img');
			img.classList.add('profile-img','follower-request');
			img.setAttribute('alt','Images');
			img.setAttribute('src',imagesArray[i]);//yaha pr image dala hai humne 
			imageContainer.appendChild(img);//append kiya humne image ko imagecontainer pr
			div.appendChild(imageContainer);
			// part2
			var textmsg= document.createElement("span");
			textmsg.classList.add('span-text','span-box');
			div.appendChild(textmsg);


			
			// part 3
			var imgbox=document.createElement("div");
			imgbox.classList.add('imagebox','image-container');
			var imgBox = document.createElement("img");
			imgBox.classList.add("image-box");
			imgBox.setAttribute('alt','Images');
			imgBox.setAttribute('src',sideImage[i]);
			imgbox.appendChild(imgBox);
			div.appendChild(imgbox);
			

			likeContainer[0].appendChild(div);//we gave parent to grandparents.lol 
		}
		
		var spanref=document.getElementsByClassName('span-text');
		for (var i =0; i<20; i++) {
			spanref[i].innerHTML=spanmsg[i];
		}

		