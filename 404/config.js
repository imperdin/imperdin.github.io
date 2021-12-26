	
		
		// OVERLAY SKIN OPTION  [ "black" : "white" ]
		
		// "black" = BLACK COLOR SCHEME
		// "white" = WHITE COLOR SCHEME

        //if (location.protocol == 'http:') // Added Security Countermeasures
        //    location.href = location.href.replace(/^http:/, 'https:')
		var option_overlay_skin = "black";
		
		
	
		// OVERLAY ANIMATION  [ "fade" : "slide" ]
		
		// "fade" = FADE ANIMATION
		// "slide" = SLIDE FROM BOTTOM ANIMATION
		
		var option_overlay_animation = "fade";
		
		
		
		// OVERLAY CONTENT ANIMATION  [ "fade" : "slide" ]
		
		// "fade" = FADE ANIMATION
		// "slide" = SLIDE FROM BOTTOM ANIMATION
		
		var option_overlay_content_animation = "slide";



		// OVERLAY BULLET NAVIGATION [ "on" : "off" ]
		
		// "on" = ENABLE BULLET NAVIGATION
		// "off" = DISABLE BULLET NAVIGATION
		
		var option_overlay_bullet_navigation = "on";
	
	
	
/** 3. HERO CONFIG
*******************************************************************/
		
		
		
		// HERO PARALLAX HOVER EFFECT - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		var option_hero_parallax_hover_effect = "on";
		
		
		
		// GRAVITY PARTICLE BACKGROUND EFFECT - [ "on" : "off" ]
		
		// "on" = OPTION ACTIVATED
		// "off" = OPTION DEACTIVATED
		
		var option_hero_gravity_effect = "on";
		
		
		
		// BACKGROUND MODE [ SEE OPTIONS BELOW ]
				
		// "image" = IMAGE BACKGROUND
		// "slider" = SLIDER BACKGROUND
		// "kenburns" = KEN BURNS SLIDER BACKGROUND
		// "youtube" = YOUTUBE VIDEO BACKGORUND - IMAGE BACKGROUND FALLBACK FOR MOBILE
		// "color" = SOLID COLOR BACKGROUND
		// "gradient" = ANIMATED GRADIENT BACKGROUND
		// "waves" = SPHERE BACKGROUND
		// "sphere" = WAVES BACKGROUND
		// "mesh" = MESH BACKGROUND
		// "space" = SPACE BACKGROUND
		// "abstract" = ABSTRACT BACKGROUND
        // "glitch" = GLITCH BACKGROUND
		// "custom" = CUSTOM BACKGROUND
		
        var option_hero_background_mode = "image";



		/** 3.1 HERO CONFIG [ IMAGE BACKGROUND ]
		*******************************************************************/
				
				
				
				// IMAGE PATH / URL
				var option_hero_background_image_path = [{src:'/assets/404/Moon.jpg'}];
		
		
		
		/** 3.2 HERO CONFIG [ SLIDER BACKGROUND ]
		*******************************************************************/
		

					
				// IMAGES PATH / URL
				var option_hero_background_slider_path = [{src:"/assets/404/Moon.jpg"},{src: "assets/images/2.jpg"},{src: "assets/images/3.jpg"}];
				
				
				
				// SLIDE DELAY / TIMEOUT IN MS
				var option_hero_background_slider_delay = 6000;
				
				
				
				//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]
		
				// fade = FADE TRANSITION
				// fade2 = FADE 2 TRANSITION
				
				// slideLeft = SLIDE LEFT TRANSITION
				// slideLeft2 = SLIDE LEFT 2 TRANSITION
				// slideRight = SLIDE RIGHT TRANSITION
				// slideRight2 = SLIDE RIGHT 2 TRANSITION
				// slideUp = SLIDE UP TRANSITION
				// slideUp2 = SLIDE UP 2 TRANSITION
				// slideDown = SLIDE DOWN TRANSITION
				// slideDown2 = SLIDE DOWN 2 TRANSITION
				
				// zoomIn = ZOOM IN TRANSITION
				// zoomIn2 = ZOOM IN 2 TRANSITION
				// zoomOut = ZOOM OUT TRANSITION
				// zoomOut2 = ZOOM OUT 2 TRANSITION
				
				// swirlLeft = SWIRL LEFT TRANSITION
				// swirlLeft2 = SWIRL LEFT 2 TRANSITION
				// swirlRight = SWIRL RIGHT TRANSITION
				// swirlRight2 = SWIRL RIGHT 2 TRANSITION
				
				// burn = BURN TRANSITION
				// burn2 = BURN 2 TRANSITION
				
				// blur = BLUR TRANSITION
				// blur2 = BLUR 2 TRANSITION
				
				// flash = FLASH TRANSITION
				// flash2 = FLASH 2 TRANSITION
				
				var option_hero_background_slider_transition = "slideDown";
				
				
				
				// TRANSITION DURATION IN MS
				var option_hero_background_slider_transitionDuration = 800;



		/** 3.3 HERO CONFIG [ KENBURNS BACKGROUND ]
		*******************************************************************/
				
				
				
				// IMAGES PATH / URL
				var option_hero_background_kenburns_path = [{src:"/assets/404/Moon.jpg"},{src: "assets/images/2.jpg"},{src: "assets/images/3.jpg"}];
				
				
				
				// SLIDE DELAY / TIMEOUT IN MS
				var option_hero_background_kenburns_delay = 6000;
				
				
				
				//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]
		
				// fade = FADE TRANSITION
				// fade2 = FADE 2 TRANSITION
				
				// slideLeft = SLIDE LEFT TRANSITION
				// slideLeft2 = SLIDE LEFT 2 TRANSITION
				// slideRight = SLIDE RIGHT TRANSITION
				// slideRight2 = SLIDE RIGHT 2 TRANSITION
				// slideUp = SLIDE UP TRANSITION
				// slideUp2 = SLIDE UP 2 TRANSITION
				// slideDown = SLIDE DOWN TRANSITION
				// slideDown2 = SLIDE DOWN 2 TRANSITION
				
				// zoomIn = ZOOM IN TRANSITION
				// zoomIn2 = ZOOM IN 2 TRANSITION
				// zoomOut = ZOOM OUT TRANSITION
				// zoomOut2 = ZOOM OUT 2 TRANSITION
				
				// swirlLeft = SWIRL LEFT TRANSITION
				// swirlLeft2 = SWIRL LEFT 2 TRANSITION
				// swirlRight = SWIRL RIGHT TRANSITION
				// swirlRight2 = SWIRL RIGHT 2 TRANSITION
				
				// burn = BURN TRANSITION
				// burn2 = BURN 2 TRANSITION
				
				// blur = BLUR TRANSITION
				// blur2 = BLUR 2 TRANSITION
				
				// flash = FLASH TRANSITION
				// flash2 = FLASH 2 TRANSITION
				
				var option_hero_background_kenburns_transition = "slideDown";
				
				
				
				// TRANSITION DURATION IN MS
				var option_hero_background_kenburns_transitionDuration = 800;
		
		
		
		/** 3.4 HERO CONFIG [ YOUTUBE BACKGROUND ]
		*******************************************************************/
				
				
				
				
				
				
				// START POINT IN SECONDS
				var option_hero_background_youtube_startPoint = 0;
				
				
				
				// END POINT IN SECONDS
				var option_hero_background_youtube_endPoint = 90;
				
				
				
				// MUTE VIDEO - [ "on" : "off" ]
				
				// "on" = VIDEO IS MUTED
				// "off" = VIDEO IS NOT MUTED
				
				var option_hero_background_youtube_mute = "on"



				// ENDLESS REPLAY LOOP - [ "on" : "off" ]
				
				// "on" = ENDLESS REPLAY LOOP
				// "off" = NO ENDLESS REPLAY LOOP
				
				var option_hero_background_youtube_loop = "off";


				// SHOW CONTROLS - [ "on" : "off" ]
				
				// "on" = SHOW VIDEO CONTROLS
				// "off" = HIDE VIDEO CONTROLS
				
				var option_hero_background_youtube_controls = "off";
				
				
				
				// !!! NOTICE IMAGE BACKGROUND WILL BE YOUR FALLBACK FOR MOBILE  !!!
		
		
		
		/** 3.5 HERO CONFIG [ COLOR BACKGROUND ]
		*******************************************************************/
				
				
				
				// CUSTOM COLOR ( FORMAT: ALL CSS FORMATS FOR COLORS )
				var option_hero_background_color_custom_color = "#6e00ff";
				
				
		
		/** 3.6 HERO CONFIG [ GRADIENT BACKGROUND ]
		*******************************************************************/
		
		
		
				// COLOR ARRAY ( FORMAT: RGB )
				var option_hero_background_gradient_colorArray = new Array( [62,35,255], [60,255,60], [255,35,98], [45,175,230], [255,0,255], [255,128,0] );
				
				
				
				// TRANSITION SPEED
				var option_hero_background_gradient_stransitionSpeed = 8;
		
		
		
		/** 3.7 HERO CONFIG [ SPHERE BACKGROUND ]
		*******************************************************************/
		
		
		
				// OBJECT DISTANCE
				var option_hero_background_sphere_distance = 300;
				
				
				
				// OBJECT ROTATION SPEED
				var option_hero_background_sphere_rotation_speed = 0.2;



				// SPHERE LINE COLOR
				var option_hero_background_sphere_line_color = "#ffffff";



				// SPHERE DOT COLOR
				var option_hero_background_sphere_dot_color = "#ffffff";



				// BACKGROUND COLOR
				var option_hero_background_sphere_background_color = "#000000";
		
						
		
		/** 3.8 HERO CONFIG [ WAVES BACKGROUND ]
		*******************************************************************/
		
		
		
				// OBJECT DISTANCE
				var option_hero_background_waves_distance = 1500;
				
				
				
				// DOT SPACING
				var option_hero_background_waves_dotSpacing = 120;
				
				
				
				// DOT AMOUNT ON X AXIS
				var option_hero_background_waves_dotAmountX = 20;
				
				
				
				// DOT AMOUNT ON Y AXIS
				var option_hero_background_waves_dotAmountY = 60;



				// DOT COLOR
				var option_hero_background_waves_dot_color = "#ffffff";



				// BACKGROUND COLOR
				var option_hero_background_waves_background_color = "#000000";
				
				
				
		/** 3.9 HERO CONFIG [ MESH BACKGROUND ]
		*******************************************************************/
		
		
		
				// MESH COLOR
				var option_hero_background_mesh_color = "#ffffff";



				// BACKGROUND COLOR
				var option_hero_background_mesh_background_color = "#111111";
				
				
				
				// MESH SPOTLIGHT SIZE
				var option_hero_background_mesh_spotlight_size = 600;
		
		
		
		/** 3.10 HERO CONFIG [ SPACE BACKGROUND ]
		*******************************************************************/
		
		
		
				// STAR AMOUNT
				var option_hero_background_space_star_amount = 512;
				
				
				
				// STAR MINIMUM SPEED
				var option_hero_background_space_star_speed = 2.5;



				// STAR COLOR
				var option_hero_background_star_star_color = "#ffffff";


				// BACKGROUND COLOR
				var option_hero_background_star_background_color = "#000000";



		/** 3.11 HERO CONFIG [ ABSTRACT BACKGROUND ]
		*******************************************************************/
		


				// BACKGROUND COLOR
				var option_hero_background_abstract_bg_color = "#d1c395";



				// MOVEMENT SPEED
				var option_hero_background_move_speed = 10;



				// BLACK MASS CORE WIDTH IN % (  MAX: 100 )
				var option_hero_background_width = 75;



				// BLACK MASS EXPANSION
				var option_hero_background_width_expansion = 0.8;



        /** 3.12 HERO CONFIG [ GLITCH BACKGROUND ]
		*******************************************************************/
		


				// GLITCH IMAGE
				var option_hero_background_glitch_image = "assets/images/4.jpg";



		/** 3.13 HERO CONFIG [ CUSTOM BACKGROUND ]
		*******************************************************************/
		
		

				// CUSTOM BACKGROUND FUNCTION
				function customBackground() {
					
					// EXAMPLE CODE
					$("#canvas").css("background","#00AB39");
					
					
				}
			