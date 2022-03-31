const mongoose = require('mongoose');
const Place = require('./model');
const asyncHandler = require("../../middleware/async");

const axios = require('axios');
const { response } = require('../../server');

const data = {
  "search_metadata": {
    "id": "623d42bdada54b82104dadc5",
    "status": "Success",
    "json_endpoint": "https://serpapi.com/searches/b036bd95138d2389/623d42bdada54b82104dadc5.json",
    "created_at": "2022-03-25 04:19:09 UTC",
    "processed_at": "2022-03-25 04:19:09 UTC",
    "google_url": "https://www.google.com/search?q=dighihills&oq=dighihills&hl=en&gl=us&sourceid=chrome&ie=UTF-8",
    "raw_html_file": "https://serpapi.com/searches/b036bd95138d2389/623d42bdada54b82104dadc5.html",
    "total_time_taken": 4.85
  },
  "search_parameters": {
    "engine": "google",
    "q": "dighihills",
    "google_domain": "google.com",
    "hl": "en",
    "gl": "us",
    "device": "desktop"
  },
  "search_information": {
    "organic_results_state": "Some results for exact spelling but showing fixed spelling",
    "query_displayed": "dighihills",
    "total_results": 864000,
    "time_taken_displayed": 0.59,
    "spelling_fix": "dighi hills",
    "showing_results_for": "dighi hills"
  },
  "knowledge_graph": {
    "title": "Dighi Hills",
    "header_images": [
      {
        "image": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/9681e8c0a96eb83efc025bc9309565276d2243880f0b4a0c743f91bb637986a1da8c503bcad98fb3.jpeg",
        "source": "https://lbb.in/pune/dighi-hills-96e538/"
      }
    ],
    "place_id": "ChIJPQ8xrADHwjsRXbPe12cL7Io",
    "website": "https://www.google.com/maps/dir//dighi+hills/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bc2c700ac310f3d:0x8aec0b67d7deb35d?sa=X&hl=en&gl=us",
    "local_map": {
      "image": "https://www.google.com/maps/vt/data=AV5O668TRJz1kIL4okUq0HVin2qXP65tt3jsF-5unRYr_Ji9PThsheMIVUnwoIHyM7-DaqIKt3STFg0TEvSIJIvXkH7KbkvGUb7eczT5eHjtvu4TwCNtWS6Po22yNld6sp3Nl6KyVrYtJy41V4g_YuZuHNMu9IxEiZzNEvElkRvHClxm43mPLQ",
      "link": "https://www.google.com/maps/place/Dighi+Hills,+Dighi,+Pimpri-Chinchwad,+Maharashtra+411015,+India/data=!4m2!3m1!1s0x3bc2c700ac310f3d:0x8aec0b67d7deb35d!5m1!1e4?sa=X&hl=en&gl=us"
    },
    "rating": 4.6,
    "review_count": 477,
    "people_also_search_for": [
      {
        "name": "Aga Khan Palace",
        "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Aga+Khan+Palace&si=ANhW_NqMq05hm_NHatki2oB83qRn9HU6YTauVAJv82wgMbWR1V6RKMsK3rI3_oQwhhmRz93Yt3Y61t0PuHr627SY2t6JgybYekIqFnErjDgJXKDKEQtN2ygiy1uN4ALa_eJSOX5LCQf9pNB8Gxn-jv-Ai145_2mjJi5I4hBrFRUj6PBwa1aXLcFOg-gnNCwKcEyxDoyQrWHoYi1WppQJFGyHbvVDSrT74P4JaUEJWr73oOpoPSqY_s12Z2TwfhkeTHN9lTkMdtxiTBPi52yzivLw4ArDisCXLxbwieyvEeHTZPT-OXmA1Lk%3D&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQxA16BAgjEAQ",
        "image": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/9681e8c0a96eb83efc025bc930956527f723927aed556f3bcc83af1b7027769ab91067bb29b4ad9cd15f760af159b18b.jpeg"
      },
      {
        "name": "Shaniwar Wada",
        "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Shaniwar+Wada&si=ANhW_NqMq05hm_NHatki2oB83qRn9HU6YTauVAJv82wgMbWR1UwfoJEiJKqBi7Ghj0TzvsWqHjRxHCZFpMYfHRStAAZilCvBPJd1D5XCJ40H1X__M8452Ffo3Cmcjk5rOGahz5nLbO9YZK1OIiK7TjCOfnjSRpzqGiN1GTArTyQIudNF_ezq4fII8i8Wo1xFYWAgxksCZ_Ln1Wlv1v755-kqzEBryIMn8mP4Y2ATxB1hQVVI138Jl0T8Z1LouFhINRAYjNKAVwfTt58ytu0HQFSd87ko9qpiurWcaUboazm-78LTjkh0zSs%3D&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQxA16BAgjEAY",
        "image": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/9681e8c0a96eb83efc025bc930956527f723927aed556f3bcc83af1b7027769a2a9796778093dd7e1a6e0a40cfed43a4.jpeg"
      },
      {
        "name": "Sinhgad Fort",
        "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Sinhagad&si=ANhW_NqMq05hm_NHatki2oB83qRn9HU6YTauVAJv82wgMbWR1QQi7ytm7SBu1GbAyz4HqEDJgtx4nCymaTbjFB7xtaQVKUl9-9i3BB2GwNDTtM968mMu0XEG_ADaK30pOMMVHzIfYKRG1dltoG8yMZcG3VeeAo2Um2kxacS82qyYT498YN7QmE2FR0_xpBbVJ3xu7qmfz5L45A_9zhapjJ-uUWXUBzPlktOXMs4PwnF8xER1vpF89zfUt70BNDxcDjmwSSnbz3nWbrNOTevz0YtF-9cu7rlwMOaECb8yp0eFjbp9DdPCt2Q%3D&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQxA16BAgjEAg",
        "image": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/9681e8c0a96eb83efc025bc930956527f723927aed556f3bcc83af1b7027769a183fe50a57c0fa0368beebe766c212b4.jpeg"
      }
    ],
    "people_also_search_for_link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+Hills&stick=H4sIAAAAAAAAAONgFuLSz9U3yDIyKSk2UEJiawkGZ6aklidWFvulVpQEl6QWFC9i5XbJTM_IVPDIzMkp3sHKCAC2r6ZhPgAAAA&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQMSgAegQIIxAB",
    "people_also_search_for_stick": "H4sIAAAAAAAAAONgFuLSz9U3yDIyKSk2UEJiawkGZ6aklidWFvulVpQEl6QWFC9i5XbJTM_IVPDIzMkp3sHKCAC2r6ZhPgAAAA"
  },
  "inline_images": [
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAg6EAE#imgrc=2-G9L7Ac7OU7NM",
      "source": "https://www.tripadvisor.com/LocationPhotoDirectLink-g297654-d6496315-i113513436-Dighi_Hills-Pune_Pune_District_Maharashtra.html",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/f4a98df23314b9912cd922d4761fb27310e37782913101d496d502e2a961dd37.jpeg"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhaEAE#imgrc=R0yGu_KzCY87yM",
      "source": "https://www.youtube.com/watch?v=JQVqGzYdcLI",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/f4a98df23314b991ddade3f706d9f768f716f995c6fa857f6b832d17fe780334.jpeg"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhZEAE#imgrc=v32Ct4ydU7Xj4M",
      "source": "https://www.tripadvisor.com/LocationPhotoDirectLink-g297654-d6496315-i113513436-Dighi_Hills-Pune_Pune_District_Maharashtra.html",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/f4a98df23314b9919d04977c29a42380d18d9b6c3a003c19e97ce4bed7d789f2.jpeg"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhcEAE#imgrc=fbPCCAlKcAvH-M",
      "source": "https://www.youtube.com/watch?v=kSlz5-QRz0U",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/f4a98df23314b991e578ffe403b0651b3f2228f298f8cb21f6ce945ef49ab364.jpeg"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAg8EAE#imgrc=26aPzn0d_Y3V-M",
      "source": "https://twitter.com/puneploggers/status/1198803999006179328",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUDfr-INAjVs5LWKY2WCbyp9UVRjYKqpx9u7ELoQLFQ&s"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhYEAE#imgrc=WcvUykcl4hIpNM",
      "source": "https://www.tripoto.com/maharashtra/trips/pune-exploration-57f7ba4c998ae",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcF6pQTbRDLaQ0o2stgmyJf82kdDUf3WGoo4Xf7BxA&s"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhbEAE#imgrc=RlvTR8YvJXV3RM",
      "source": "https://www.whatshot.in/pune/dighi-hills-promises-amazing-sunsets-views-of-pcmc-c-30019",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6emCZtaKqgVe2cg8px6KpCm07EfE0MRIOIbZPyFr1Jg&s"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhXEAE#imgrc=Qkh6i-Tt0iwPAM",
      "source": "https://lbb.in/pune/dighi-hills-96e538/",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6N3Ao7-ba02O84OMbzDNFZ34Y6GIuUXbnzi7wNxK_g&s"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhWEAE#imgrc=V9gqoSdLXiYFFM",
      "source": "https://www.tripadvisor.com/LocationPhotoDirectLink-g297654-d6496315-i447938594-Dighi_Hills-Pune_Pune_District_Maharashtra.html",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YR-8hdosm0snrtAM-qruDWJ0w5vgM5kqihsWGdKU&s"
    },
    {
      "link": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&tbm=isch&source=iu&ictx=1&vet=1&fir=2-G9L7Ac7OU7NM%252C4tsJJ0f_rjMDMM%252C_%253BR0yGu_KzCY87yM%252CWQJ3TIy6iiop3M%252C_%253Bv32Ct4ydU7Xj4M%252C4tsJJ0f_rjMDMM%252C_%253BfbPCCAlKcAvH-M%252CxopzfVKKFizwUM%252C_%253B26aPzn0d_Y3V-M%252C7MtJoAAcw-RnkM%252C_%253BWcvUykcl4hIpNM%252Cb45vUC3RYWZNaM%252C_%253BRlvTR8YvJXV3RM%252CvRKFE7-PmlUc2M%252C_%253BQkh6i-Tt0iwPAM%252CQ2jtbair4KXnCM%252C_%253BV9gqoSdLXiYFFM%252CbWLocybXE5-xWM%252C_%253BmhMBoNqNhb_FgM%252CvRKFE7-PmlUc2M%252C_&usg=AI4_-kQ-pRmDFWmnAmuCZPPLM3WjIFYG9A&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ9QF6BAhVEAE#imgrc=mhMBoNqNhb_FgM",
      "source": "https://www.whatshot.in/pune/dighi-hills-promises-amazing-sunsets-views-of-pcmc-c-30019",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKFm7XMEGCYBiHWbFrRS4SWcbA31N98WaniDxOlZM0Q&s"
    }
  ],
  "inline_videos": [
    {
      "position": 1,
      "title": "Epic Timelapse @ Dighi hills Pune|| Watch till end #dighihills",
      "link": "https://www.youtube.com/embed/kSlz5-QRz0U",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/58286c4de176bf55fafc5b9ab9328e82cd569f31c320ab41f739fbf939c2f47e.jpeg",
      "channel": "NitinShinare Vlogs",
      "duration": "2:21",
      "platform": "YouTube",
      "date": "Jul 9, 2018"
    },
    {
      "position": 2,
      "title": "Best place in pune for one day trip | Dighi Hills | Pune Tourism",
      "link": "https://www.youtube.com/watch?v=WoZtJZoFYSg",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/58286c4de176bf55b9be7b165ba9e6f0a169baa5641f778b5a810af6ad991072.jpeg",
      "channel": "Shreyas Gulavani",
      "duration": "3:44",
      "platform": "YouTube",
      "date": "Aug 1, 2021"
    },
    {
      "position": 3,
      "title": "Pune 360 - Location2: Dighi Hills, It is about 13 -15km...",
      "link": "https://www.facebook.com/Pune360/videos/location2-dighi-hills-it-is-about-13-15km-from-pune-station-deccan-and-even-swar/734808536704045/",
      "thumbnail": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/58286c4de176bf550f50b7729dd97f314222bae8801f5f7676b0c31c43f7d96b.jpeg",
      "channel": "Pune 360",
      "duration": "0:19",
      "platform": "Facebook",
      "date": "Jul 9, 2017"
    }
  ],
  "organic_results": [
    {
      "position": 1,
      "title": "Dighi Hills (Pune) - 2022 All You Need to Know ... - TripAdvisor",
      "link": "https://www.tripadvisor.com/Attraction_Review-g297654-d6496315-Reviews-Dighi_Hills-Pune_Pune_District_Maharashtra.html",
      "displayed_link": "https://www.tripadvisor.com › ... › Things to Do in Pune",
      "snippet": "This place has 2 hills in Dighi village. One hill has temple and dargah and other hill has military training operation points. This place is not very much ...",
      "rich_snippet": {
        "top": {
          "detected_extensions": {
            "rating": 4.5,
            "reviews": 12
          },
          "extensions": [
            "Rating: 4.5",
            "‎12 reviews"
          ]
        }
      },
      "about_this_result": {
        "source": {
          "description": "Tripadvisor, Inc. is an American online travel company that operates a website and mobile app with user-generated content and a comparison shopping website. It also offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.",
          "source_info_link": "https://en.wikipedia.org/wiki/Tripadvisor",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f113d984e03fe6488161c0fe192473c676b68fbf8a15daed85664b583749cd3b4b5.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "related_keywords": [
          "hill"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://www.tripadvisor.com/Attraction_Review-g297654-d6496315-Reviews-Dighi_Hills-Pune_Pune_District_Maharashtra.html&tbm=ilp&ilps=AC47Oe_um_0M-T3IpxORFnkX01MsAkFCMA"
    },
    {
      "position": 2,
      "title": "Visit Dighi Hills on your trip to Pune or India • Inspirock",
      "link": "https://www.inspirock.com/india/pune/dighi-hills-a4246861339",
      "displayed_link": "https://www.inspirock.com › ... › Pune District › Pune",
      "snippet": "Dighi hills also known as Dattgad is located on pune Alandi Road. You can try it for easy trek. On the top, You will find Dattmandir on east side and Darga on ...",
      "about_this_result": {
        "source": {
          "description": "inspirock.com was first indexed by Google more than 10 years ago",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f1157eb34fad383086723f038ef1c172a8602a91fd7b5fc0d511ce8352abd57f0b1.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://www.inspirock.com/india/pune/dighi-hills-a4246861339&tbm=ilp&ilps=AC47Oe-voS4ApTnGPulAce6Q9fNB6wlG_A",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:SxbkAuujE04J:https://www.inspirock.com/india/pune/dighi-hills-a4246861339+&cd=5&hl=en&ct=clnk&gl=us"
    },
    {
      "position": 3,
      "title": "Dighi Hills in the city Pimpri-Chinchwad - Worldorgs.com",
      "link": "https://in.worldorgs.com/catalog/pimpri-chinchwad/national-park/dighi-hills",
      "displayed_link": "https://in.worldorgs.com › catalog › national-park › dig...",
      "snippet": "A perfect place for hiking and photography with friends and family. Excellent views and greenery. You can bring your friendly pet also.",
      "about_this_result": {
        "source": {
          "description": "in.worldorgs.com was first indexed by Google in June 2021",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f117863362bea9e0fb87ea9a0c453ce94015f0bda2eab6d4d763cb0587b5c9ff5f8.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://in.worldorgs.com/catalog/pimpri-chinchwad/national-park/dighi-hills&tbm=ilp&ilps=AC47Oe8FNnb6wIyOeH4YZJQ8SWJJJ60e6g",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:r2lNqyt45DoJ:https://in.worldorgs.com/catalog/pimpri-chinchwad/national-park/dighi-hills+&cd=6&hl=en&ct=clnk&gl=us"
    },
    {
      "position": 4,
      "title": "Dighi Hills, Pune County, MH, IN - eBird Hotspot",
      "link": "https://ebird.org/hotspot/L6548645",
      "displayed_link": "https://ebird.org › hotspot",
      "snippet": "Explore a complete list of bird species observations in this area.",
      "about_this_result": {
        "source": {
          "description": "eBird is an online database of bird observations providing scientists, researchers and amateur naturalists with real-time data about bird distribution and abundance.",
          "source_info_link": "https://en.wikipedia.org/wiki/EBird",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f1152ba77e5af35fc78e3c615a64bebc09bf840989bed1414d78e4c0568df7ec947.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://ebird.org/hotspot/L6548645&tbm=ilp&ilps=AC47Oe_VEIZmNeju54FYtRRQGJ6bxYzQfw",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:UY1KjirOM1AJ:https://ebird.org/hotspot/L6548645+&cd=7&hl=en&ct=clnk&gl=us"
    },
    {
      "position": 5,
      "title": "Dighi Hills Vacation Rentals & Homes - Pimpri-Chinchwad",
      "link": "https://www.airbnb.com/dighi-hills-india/stays",
      "displayed_link": "https://www.airbnb.com › ... › Pimpri-Chinchwad",
      "snippet": "Mar 24, 2022 - Rent from people in Dighi Hills, India from $20/night. Find unique places to stay with local hosts in 191 countries.",
      "about_this_result": {
        "source": {
          "description": "Airbnb, Inc. is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. Based in San Francisco, California, the platform is accessible via website and mobile app.",
          "source_info_link": "https://en.wikipedia.org/wiki/Airbnb",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f111f697615105dc179bf1a200f0592254668f3a24d9712c81790194d1df44c4bb6.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://www.airbnb.com/dighi-hills-india/stays&tbm=ilp&ilps=AC47Oe8RCco71KFm_4FvLz-JLAtiaFX-Rg",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:AIIv8oSflzYJ:https://www.airbnb.com/dighi-hills-india/stays+&cd=18&hl=en&ct=clnk&gl=us"
    },
    {
      "position": 6,
      "title": "Dighi Hills - Google",
      "link": "https://www.google.com.my/travel/entity/key/ChcI3eb6vv3sgvaKARoKL20vMGoyNHRzMBAE?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaWAo6EjYyJTB4M2JjMmUwYjU1OGNiY2RhYjoweGI1ZGYxNWNkMzNjNGE2ZGQ6DVVydWxpIEthbmNoYW4aABIaEhQKBwjlDxAKGAkSBwjlDxAKGAoYATICEAAqCwoHKAE6A1VTRBoA&ved=2ahUKEwjyxqnkiI31AhVPBTYKHTpyByEQxosIegUIARCtAQ&rp=OAFIAg&ap=MAA",
      "displayed_link": "https://www.google.com.my › travel › entity › key",
      "snippet": "Lush hill offering a scenic hiking trail to an elevated Hindu temple & expansive views.",
      "about_this_result": {
        "source": {
          "description": "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include a search engine, online advertising technologies, cloud computing, software, and hardware.",
          "source_info_link": "https://en.wikipedia.org/wiki/Google",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f116006232a9e3e94b2a62048a2072ca93d581e16a91b304ecc36562399b4d71341.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "related_keywords": [
          "hill"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://www.google.com.my/travel/entity/key/ChcI3eb6vv3sgvaKARoKL20vMGoyNHRzMBAE?utm_campaign%3Dsharing%26utm_medium%3Dlink%26utm_source%3Dhtls%26ts%3DCAESCgoCCAMKAggDEAAaWAo6EjYyJTB4M2JjMmUwYjU1OGNiY2RhYjoweGI1ZGYxNWNkMzNjNGE2ZGQ6DVVydWxpIEthbmNoYW4aABIaEhQKBwjlDxAKGAkSBwjlDxAKGAoYATICEAAqCwoHKAE6A1VTRBoA%26ved%3D2ahUKEwjyxqnkiI31AhVPBTYKHTpyByEQxosIegUIARCtAQ%26rp%3DOAFIAg%26ap%3DMAA&tbm=ilp&ilps=AC47Oe8da1_o4bzQNAIx0Xq8TOgib_2Lkw",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:ecYzK_1HIosJ:https://www.google.com.my/travel/entity/key/ChcI3eb6vv3sgvaKARoKL20vMGoyNHRzMBAE%3Futm_campaign%3Dsharing%26utm_medium%3Dlink%26utm_source%3Dhtls%26ts%3DCAESCgoCCAMKAggDEAAaWAo6EjYyJTB4M2JjMmUwYjU1OGNiY2RhYjoweGI1ZGYxNWNkMzNjNGE2ZGQ6DVVydWxpIEthbmNoYW4aABIaEhQKBwjlDxAKGAkSBwjlDxAKGAoYATICEAAqCwoHKAE6A1VTRBoA%26ved%3D2ahUKEwjyxqnkiI31AhVPBTYKHTpyByEQxosIegUIARCtAQ%26rp%3DOAFIAg%26ap%3DMAA+&cd=19&hl=en&ct=clnk&gl=us"
    },
    {
      "position": 7,
      "title": "attractions, hotels, and food near Dighi Hills - Pune - Trip.com",
      "link": "https://www.trip.com/travel-guide/attraction/pune/dighi-hills-58311973/",
      "displayed_link": "https://www.trip.com › ... › India › Maharashtra › Pune",
      "snippet": "Dighi Hills discounts - what to see at Pune - check out reviews and 3 photos for Dighi Hills - popular attractions, hotels, and restaurants near Dighi ...",
      "about_this_result": {
        "source": {
          "description": "Trip.com is an international online travel agency. The website is owned by Trip.com Group, one of the world's largest online travel agencies with over 400 million users worldwide, and also the parent of Skyscanner.",
          "source_info_link": "https://en.wikipedia.org/wiki/Trip.com",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f11541a2a5437d9a590c6d1f1e8f04f778a5d6bd71c5880eff877ba2e074ac4d6ef.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://www.trip.com/travel-guide/attraction/pune/dighi-hills-58311973/&tbm=ilp&ilps=AC47Oe8D0vG55l1jKsyaFYe21Pm8pMFE1A",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:yJzv1ZI5JSkJ:https://www.trip.com/travel-guide/attraction/pune/dighi-hills-58311973/+&cd=20&hl=en&ct=clnk&gl=us"
    },
    {
      "position": 8,
      "title": "Dighi Hills, Pune - Tripoto",
      "link": "https://www.tripoto.com/maharashtra/trips/pune-exploration-57f7ba4c998ae",
      "displayed_link": "https://www.tripoto.com › ... › Maharashtra Trips",
      "date": "Sep 6, 2016",
      "snippet": "Dighi town lies between Pune city And Pimpri-Chinchwad. There's parking area for bikes at the base of hill for free. Once you reach the base of ...",
      "about_this_result": {
        "source": {
          "description": "tripoto.com was first indexed by Google more than 10 years ago",
          "icon": "https://serpapi.com/searches/623d42bdada54b82104dadc5/images/0bdd299f2e3de1f84e29d329c0e24f112b68e3d78565ee63884c70922ace7203f512414aa80032dbb1650ec8e796c7a4.png"
        },
        "keywords": [
          "dighi",
          "hills"
        ],
        "related_keywords": [
          "hill"
        ],
        "languages": [
          "English"
        ],
        "regions": [
          "the United States"
        ]
      },
      "about_page_link": "https://www.google.com/search?q=About+https://www.tripoto.com/maharashtra/trips/pune-exploration-57f7ba4c998ae&tbm=ilp&ilps=AC47Oe_IAKeOwsF_UFLkKa7Dd83GaIIViQ",
      "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:b45vUC3RYWYJ:https://www.tripoto.com/maharashtra/trips/pune-exploration-57f7ba4c998ae+&cd=21&hl=en&ct=clnk&gl=us"
    }
  ],
  "related_searches": [
    {
      "query": "dighi hills location",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+hills+location&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhLEAE"
    },
    {
      "query": "dighi hills distance",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+Hills+distance&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhIEAE"
    },
    {
      "query": "dighi hills wikipedia",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+hills+wikipedia&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhFEAE"
    },
    {
      "query": "dighi hills view point",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+Hills+View+point&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhEEAE"
    },
    {
      "query": "dighi hills height",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+Hills+height&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhDEAE"
    },
    {
      "query": "dighi hills trekking",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+hills+trekking&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhBEAE"
    },
    {
      "query": "dighi hills directions",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+hills+directions&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAhAEAE"
    },
    {
      "query": "dighi hills timings",
      "link": "https://www.google.com/search?ucbcb=1&gl=us&hl=en&q=Dighi+hills+timings&sa=X&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ1QJ6BAg1EAE"
    }
  ],
  "pagination": {
    "current": 1,
    "next": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=10&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8NMDegQIARBJ",
    "other_pages": {
      "2": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=10&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARA7",
      "3": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=20&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARA9",
      "4": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=30&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARA_",
      "5": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=40&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARBB",
      "6": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=50&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARBD",
      "7": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=60&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARBF",
      "8": "https://www.google.com/search?q=dighi+hills&ucbcb=1&gl=us&hl=en&ei=wEI9YqvPLIOOxc8Po_-2kAU&start=70&sa=N&ved=2ahUKEwirr8WetOD2AhUDR_EDHaO_DVIQ8tMDegQIARBH"
    }
  },
  "serpapi_pagination": {
    "current": 1,
    "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=10",
    "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=10",
    "other_pages": {
      "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=10",
      "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=20",
      "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=30",
      "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=40",
      "6": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=50",
      "7": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=60",
      "8": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=dighi+hills&start=70"
    }
  }
}

const reviewData = [{
  "type": "ATTRACTION",
  "location_id": "6496315",
  "name": "Dighi Hills",
  "latitude": "18.623266",
  "longitude": "73.8857",
  "num_reviews": "12",
  "timezone": "Asia/Kolkata",
  "location_string": "Pune, Pune District, Maharashtra",
  "photo": {
    "images": {
      "small": {
        "width": "150",
        "url": "https://media-cdn.tripadvisor.com/media/photo-l/06/d0/6e/99/dighi-hills.jpg",
        "height": "150"
      },
      "thumbnail": {
        "width": "50",
        "url": "https://media-cdn.tripadvisor.com/media/photo-t/06/d0/6e/99/dighi-hills.jpg",
        "height": "50"
      },
      "original": {
        "width": "2000",
        "url": "https://media-cdn.tripadvisor.com/media/photo-o/06/d0/6e/99/dighi-hills.jpg",
        "height": "1500"
      },
      "large": {
        "width": "550",
        "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/d0/6e/99/dighi-hills.jpg",
        "height": "413"
      },
      "medium": {
        "width": "250",
        "url": "https://media-cdn.tripadvisor.com/media/photo-f/06/d0/6e/99/dighi-hills.jpg",
        "height": "188"
      }
    },
    "is_blessed": false,
    "uploaded_date": "2014-10-29T23:37:56-0400",
    "caption": "30 0ct 2014",
    "id": "114323097",
    "helpful_votes": "4",
    "published_date": "2014-10-29T23:37:56-0400",
    "user": {
      "user_id": null,
      "member_id": "0",
      "type": "user"
    }
  },
  "api_detail_url": "https://api.tripadvisor.com/api/internal/1.14/location/6496315",
  "awards": [],
  "location_subtype": "none",
  "doubleclick_zone": "as.india.maharashtra.pune",
  "preferred_map_engine": "default",
  "raw_ranking": "2.891944408416748",
  "ranking_geo": "Pune",
  "ranking_geo_id": "297654",
  "ranking_position": "93",
  "ranking_denominator": "298",
  "ranking_category": "attraction",
  "ranking_subcategory": "#93 of 298 things to do in Pune",
  "subcategory_ranking": "#93 of 298 things to do in Pune",
  "ranking": "#93 of 298 things to do in Pune",
  "distance": null,
  "distance_string": null,
  "bearing": null,
  "rating": "4.5",
  "is_closed": false,
  "is_long_closed": false,
  "description": "",
  "web_url": "https://www.tripadvisor.com/Attraction_Review-g297654-d6496315-Reviews-Dighi_Hills-Pune_Pune_District_Maharashtra.html",
  "write_review": "https://www.tripadvisor.com/UserReview-g297654-d6496315-Dighi_Hills-Pune_Pune_District_Maharashtra.html",
  "ancestors": [
    {
      "subcategory": [
        {
          "key": "city",
          "name": "City"
        }
      ],
      "name": "Pune",
      "abbrv": null,
      "location_id": "297654"
    },
    {
      "subcategory": [
        {
          "key": "district",
          "name": "District"
        }
      ],
      "name": "Pune District",
      "abbrv": null,
      "location_id": "12400025"
    },
    {
      "subcategory": [
        {
          "key": "state",
          "name": "State"
        }
      ],
      "name": "Maharashtra",
      "abbrv": null,
      "location_id": "297648"
    },
    {
      "subcategory": [
        {
          "key": "country",
          "name": "Country"
        }
      ],
      "name": "India",
      "abbrv": null,
      "location_id": "293860"
    }
  ],
  "category": {
    "key": "attraction",
    "name": "Attraction"
  },
  "subcategory": [
    {
      "key": "57",
      "name": "Nature & Parks"
    },
    {
      "key": "61",
      "name": "Outdoor Activities"
    }
  ],
  "parent_display_name": "Pune",
  "is_jfy_enabled": false,
  "nearest_metro_station": [],
  "address_obj": {
    "street1": "Dighi Hills Rd",
    "street2": null,
    "city": "Pune",
    "state": "Maharashtra",
    "country": "India",
    "postalcode": "411015"
  },
  "address": "Dighi Hills Rd, Pune 411015 India",
  "is_candidate_for_contact_info_suppression": false,
  "subtype": [
    {
      "key": "87",
      "name": "Hiking Trails"
    },
    {
      "key": "66",
      "name": "Mountains"
    }
  ],
  "tags": {},
  "reviews": [
    {
      "language": "en",
      "title": "Great place to visit",
      "text": "Dighi Hill's is good place to visit in Pune. We get peaceful mind at Dighi Hill's. \nSo many tree's are planted. After one year we can see it's as a small  forest 🌲",
      "publishedDate": "2021-09-06T02:30:27-04:00",
      "rating": "5",
      "travelDate": "2021-06",
      "user": {
        "username": "VaijuSankpal"
      },
      "subratings": [],
      "machineTranslated": false
    },
    {
      "language": "en",
      "title": "Small trek place.",
      "text": "Nice place to visit..\nEspecially before or during slight rain or drizzle... One morning / evening picnic / location with a small trek",
      "publishedDate": "2020-11-27T21:05:01-05:00",
      "rating": "5",
      "travelDate": "2020-10",
      "user": {
        "username": "ATUL_SAPKAL"
      },
      "subratings": [],
      "machineTranslated": false
    },
    {
      "language": "en",
      "title": "Enjoy the scenic beauty",
      "text": "We happened to visit this place on a cloudy day with family and friends. very calm environment. Enjoyed a lot. It happened to be one of our best picnics we ever had",
      "publishedDate": "2018-03-30T23:43:44-04:00",
      "rating": "5",
      "travelDate": "2017-04",
      "user": {
        "username": "ayushagarwals022"
      },
      "subratings": [],
      "machineTranslated": false
    },
    {
      "language": "en",
      "title": "Cool place",
      "text": "Nice place to spend some peaceful time, not much crowded, lots of stairs, amazing views.... can catch amazing sunset views for photography ",
      "publishedDate": "2016-11-20T02:36:35-05:00",
      "rating": "3",
      "travelDate": "2016-11",
      "user": {
        "username": "Automotions"
      },
      "subratings": [],
      "machineTranslated": false
    },
    {
      "language": "en",
      "title": "Worth the climb- splendid landscape",
      "text": "Away from the city life, Dighi hills is worth a spot to drive to on a weekend early morning. Climb up the hill and set up your camp there. What next, charge your cameras. \nWhat you see from above is the splendid Pune city landscape. The silky morning skyline will take that panting breath away for sure...",
      "publishedDate": "2016-03-02T17:49:05-05:00",
      "rating": "4",
      "travelDate": "2015-04",
      "user": {
        "username": "Rajat C"
      },
      "subratings": [],
      "machineTranslated": false
    }
  ]
}]

const googleMapReviews = {
  "html_attributions": [],
  "result": {
      "address_components": [
          {
              "long_name": "Dighi Hills",
              "short_name": "Dighi Hills",
              "types": [
                  "natural_feature",
                  "establishment"
              ]
          },
          {
              "long_name": "Dighi",
              "short_name": "Dighi",
              "types": [
                  "sublocality_level_1",
                  "sublocality",
                  "political"
              ]
          },
          {
              "long_name": "Pimpri-Chinchwad",
              "short_name": "Pimpri-Chinchwad",
              "types": [
                  "locality",
                  "political"
              ]
          },
          {
              "long_name": "Pune",
              "short_name": "Pune",
              "types": [
                  "administrative_area_level_2",
                  "political"
              ]
          },
          {
              "long_name": "Maharashtra",
              "short_name": "MH",
              "types": [
                  "administrative_area_level_1",
                  "political"
              ]
          },
          {
              "long_name": "India",
              "short_name": "IN",
              "types": [
                  "country",
                  "political"
              ]
          },
          {
              "long_name": "411015",
              "short_name": "411015",
              "types": [
                  "postal_code"
              ]
          }
      ],
      "adr_address": "Dighi Hills, <span class=\"extended-address\">Dighi</span>, <span class=\"locality\">Pimpri-Chinchwad</span>, <span class=\"region\">Maharashtra</span> <span class=\"postal-code\">411015</span>, <span class=\"country-name\">India</span>",
      "formatted_address": "Dighi Hills, Dighi, Pimpri-Chinchwad, Maharashtra 411015, India",
      "geometry": {
          "location": {
              "lat": 18.6238038,
              "lng": 73.88527499999999
          },
          "viewport": {
              "northeast": {
                  "lat": 18.62559743611281,
                  "lng": 73.88748757073238
              },
              "southwest": {
                  "lat": 18.62190678168119,
                  "lng": 73.8786994610377
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
      "icon_background_color": "#7B9EB0",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
      "name": "Dighi Hills",
      "photos": [
          {
              "height": 2340,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/102773675602417849596\">Sunil Shivniwar</a>"
              ],
              "photo_reference": "Aap_uECZEkSEeZw1NabGhrQbz3u6KY7YUj9FgsNcwotsh_n69yFp3GXcJWD5i88sXdyK8u4wamYUWBQ59V3eDEljAFReQu0HvdpXbvq0zYgHma_w0Ni52WPpLyqMywIZ_r3HhO8GC0ENm_mfgmS2w9qIh_EtBvvbyi-Z2xIzqqHEW6VcrTr_",
              "width": 4160
          },
          {
              "height": 3456,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/116461127525398906254\">Nikhil Gholap</a>"
              ],
              "photo_reference": "Aap_uEDu6x8uKAg08qE3OT5yimquj9bpOPw5eB2hNXcDdW_FIZ6deo6xZSnEYh0xzdCGjPUyAKN5XYAHtfu57v0rxwiHY9aob-FXBUvzYf_1lzQfQAFGSJljFxLaa7EH9_qFrvBrSs8ImBjjhBdiWEK5BOmfG-Cj3_-wfNxVI2VcE3kHOW-c",
              "width": 4608
          },
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/104661817464125192470\">Rashmi Thakur</a>"
              ],
              "photo_reference": "Aap_uEDa382Ji03AX1vwVCaHc-qoY2SFLUhvFiajcoSI6tVO2s3g-ZTQCVYe_jFW8R14cXpz_ysTMaau7_ao572uzcq5SGvmysZX9OLqsGw2gOSV7kBTV4OEg-6m4CtBK073KgFsWd7FNyrc1QO94tuhVDJkYYADyXnaJmCUyDDsMPc23Lh9",
              "width": 4032
          },
          {
              "height": 2111,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/109455266488927768596\">Pratik Babar</a>"
              ],
              "photo_reference": "Aap_uEBZbhVNqXirSsQi-I74zopQbFBeOYSjF7nAO0hrJ8x-Fy8WjizP9p9-Xu0p5gLmnxQek0NlhxCmrPUrzo3tKAj-D28K-ntMMueoY3ANVxL4fCZTyBlew07y-01dZFU2f_RzK1M-LwDfAoqLbicuSTcYRkB95VxIg-QWVstCv0JjZINR",
              "width": 4096
          },
          {
              "height": 6000,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/104851994459588318844\">Anis Shaikh</a>"
              ],
              "photo_reference": "Aap_uEB1_BKL7EsZ-ycfr1kgtk-nYOh7Aff0mj526n9QHPHvO2XevO_m7UHIYd0DDM49Tx59OVrNDUhPwPM2BzCUDUxBPTfJDfnNvawIKB7465ggLaFQDq05n6Agxa9I4U5em1UUPNR_R-I26bSf_v_a78KGZNJLudREXBonXhcM29Bcga5O",
              "width": 8000
          },
          {
              "height": 3120,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/115951851485673862621\">KALYANI PANCHAL</a>"
              ],
              "photo_reference": "Aap_uEDmzrZPwaTI7rRuJFHcij7nHkiVYkNq9JrMNPx4K0i1Fg8rj-uWVle9lX_1lqgTAa0J4NiuCljKnUa32_IDVs1r5TOpYcBT6MRuBmVxYwGGa9nsO5Ptlwx1nqilUGS_5CoG4bg7u3lVtthHulmC5UZ2bLyaeGsANrRCfHmRcGh4jYJO",
              "width": 4160
          },
          {
              "height": 2592,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/110093176088496294427\">Vinod Singh</a>"
              ],
              "photo_reference": "Aap_uEBnzt4QzdTVV3ukcxRlBCB1YDyk10AWezH10IEj4eYFhO2yvv3feF-slxyM4geAvrIrb8Gl-EFPerLdtu91UvN6T_l8AgqvZUkgC3IaTOyM2RyX476sCXo6_w-wIiXg4bEYME2WY7uOsSwRNTkJzpZlfwc1toLdtVL4ZU0IL2DGu9pR",
              "width": 4608
          },
          {
              "height": 1808,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/105269204329212172199\">Gaurav Awatade</a>"
              ],
              "photo_reference": "Aap_uEDRPsyN7oyPnN_S4D9st4RMj_RIHZsU0zlc8AEZLPyvMN701Six-1fQr3P2i2j169w8veg5jpYSqmCbtFzW926cn3tVB8-m80-Rm2H9y6msoivZtksc9uYnrbLmL2eW_jOryUySwBFk5fWJ1mfgAtUJtQQTTxmi4LQVYoFiSKwvkK19",
              "width": 4000
          },
          {
              "height": 2208,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/112672611325922406366\">Sandeep Pathak</a>"
              ],
              "photo_reference": "Aap_uEBwrIgMnkZmykafZ6HGXAQIrQrUR7RZQxYpp2BQ2VujQHnhCYemAHkOprxixsLdAuWs-FfKfsMEMDd-TYUBAp0n9Qlf4XRVYhekMe_gWDzEw3iElG7cxcwpG_QU34BHudA7h2RlEsYYrStb6eDjgYsBvBteonqmeNCS35QTVdme4Vr6",
              "width": 3760
          },
          {
              "height": 3024,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/100992144790425163566\">SWAPNIL KADAM</a>"
              ],
              "photo_reference": "Aap_uECdf1-zuWLV64yAP5IIA5r6-yuqxahh3MhrdDxU-1wDItgOFU7PqDaqCfhY0G6igCSbwM1RxpuWKf5ShKIxA4p0kNH4lmFmJ6TI_1z6C86XZdy80bgmabxz0hgTA5Ykcz6aAK2GkaFx2cyMvA3g4Ahxp1UlC4GHI8SrkO_O43HdwA84",
              "width": 4032
          }
      ],
      "place_id": "ChIJPQ8xrADHwjsRXbPe12cL7Io",
      "rating": 4.6,
      "reference": "ChIJPQ8xrADHwjsRXbPe12cL7Io",
      "reviews": [
          {
              "author_name": "Shonali Lokhande",
              "author_url": "https://www.google.com/maps/contrib/109250066999602833977/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GiJjC_9kifWVrzqFADfvtHo6BD9bM-uBYjaCQVP2w=s128-c0x00000000-cc-rp-mo-ba3",
              "rating": 5,
              "relative_time_description": "7 months ago",
              "text": "It's my  Sukoon 😌💫🥰",
              "time": 1629571997
          },
          {
              "author_name": "Pragati Shinde",
              "author_url": "https://www.google.com/maps/contrib/101053578264227402617/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJyiCf3gd-PyImFkNd32e004K5nEsF-mrTqdBcInGQ=s128-c0x00000000-cc-rp-mo-ba2",
              "rating": 5,
              "relative_time_description": "2 months ago",
              "text": "Short trip for morning trek...",
              "time": 1642413045
          },
          {
              "author_name": "Hrishikesh Jadhav",
              "author_url": "https://www.google.com/maps/contrib/113971992565501352311/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GiefUS0ObXoNHLFSPiOErw3KgSxmwvFjTXSoyhI8Q=s128-c0x00000000-cc-rp-mo",
              "rating": 5,
              "relative_time_description": "a month ago",
              "text": "One of the my Daily visit place",
              "time": 1644400290
          },
          {
              "author_name": "78 ädñañ shãìkh",
              "author_url": "https://www.google.com/maps/contrib/109641370195775094823/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GhuX6ezk8e5dQDnVtIVa6t6zH3dfVNJB5WLBIL6Uw=s128-c0x00000000-cc-rp-mo-ba3",
              "rating": 5,
              "relative_time_description": "a month ago",
              "text": "Awsm...it's worth a climb..",
              "time": 1644907917
          },
          {
              "author_name": "Pratibha Jawale",
              "author_url": "https://www.google.com/maps/contrib/116763964809041443540/reviews",
              "language": "en",
              "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GjaB397R8sS9S0FCNxtcqXAA2GA5GFqLHR4Of1E1w=s128-c0x00000000-cc-rp-mo",
              "rating": 5,
              "relative_time_description": "6 months ago",
              "text": "Beautiful place in Rainy seasons",
              "time": 1630479079
          }
      ],
      "types": [
          "natural_feature",
          "establishment"
      ],
      "url": "https://maps.google.com/?cid=10010388612369003357",
      "user_ratings_total": 477,
      "utc_offset": 330,
      "vicinity": "Dighi Hills"
  },
  "status": "OK"
}

const getPlaceDetails = asyncHandler(async (req,res) => {
    let searchQuery = req.query.key
    const query = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${searchQuery}&type=video&key=AIzaSyCPEtuFv56vKRM_Cb2MTSuP3_87Mc20Cuo`;
    const search_google_api = `https://serpapi.com/search.json?q=${searchQuery}&hl=en&gl=us&google_domain=google.com&api_key=f70cce2ec221209bcd45af4533adbbc51c51b682c29251b618061115c6e95d5c`;
    
    res.render('placeDetails', {place: data, reviewData: reviewData[0], googleMapReviews: googleMapReviews});
    // Make a request for a user with a given ID
    // axios.get(search_google_api)
    //       .then((response)=> JSON.stringify(response.data))
    //       .then((data) => res.status(200).send(data))
    //       .catch(function (err) {
    //         console.log("Fetch Error :-S", err);
    //         res.status(500).send({"Internal Server error": err});
    //       });
        
});


const testapi = asyncHandler(async (req,res)=>{
  const apiurl = "https://api.apify.com/v2/actor-tasks/CJOYmG71JGTdSMUim/run-sync-get-dataset-items?token=apify_api_GCs4BlHgxOM7HfOn2XxwgqUoSe1eNZ2MQPGv&memory=2048";

  axios.post(apiurl, {
    "locationFullName": "dighi hills",
    "maxItems": 5,
    "includeAttractions": true,
    "includeRestaurants": false,
    "includeHotels": false,
    "includeTags": false,
    "includeReviews": true,
    "maxReviews": 5,
    "language": "en",
    "currency": "USD",
    "proxyConfiguration": {
      "useApifyProxy": true
    },
    "debugLog": false,
    "foo": "bar",
    "checkInDate": "",
    "lastReviewDate": ""
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
});


const getGoogleMapsData = asyncHandler(async (req,res) => {
  let placeid = req.query.placeid;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&key=AIzaSyCATtupoIdp7bend_fjJmKy52HLRxSz_oA`;
  axios.get(url)
        .then((response)=> {
          res.send(response.data);
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
          res.status(500).send({"Internal Server error": err});
        });
});



const getSerpapiData = asyncHandler(async (req,res) => {
  let query = req.query.query;
  const url = `https://serpapi.com/search.json?q=${query}&hl=en&gl=us&google_domain=google.com&api_key=f70cce2ec221209bcd45af4533adbbc51c51b682c29251b618061115c6e95d5c`;
  axios.get(url)
        .then((response)=> {
          res.send(response.data);
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
          res.status(500).send({"Internal Server error": err});
        });
});



module.exports = {
    getPlaceDetails,
    testapi,
    getGoogleMapsData,
    getSerpapiData
}