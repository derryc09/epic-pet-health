import React from "react";
import Scrollchor from 'react-scrollchor';
function hashLinkScroll() {
    console.log("hi");
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
         $('.parallax').parallax();
     

         
        // var element = document.querySelector("test");
        // console.log(element);
        //  element.scrollIntoView();

        //   var hash = window.location.hash;
        //   if (hash) {
        //     var element = document.querySelector(hash);
        //     if (element) {
        //       element.scrollIntoView();
        //     }
        //   } else {
        //    window.scrollTo(0, 0);
        //   }

        function  scrollToAnchor(anchor)  {
            let anchorName = anchor;
            if (anchorName) {
                anchorName = anchorName.replace("#","");
                let anchorElement = document.getElementById(anchorName);
                if(anchorElement) { anchorElement.scrollIntoView(); }
            }
        }

    }



    render() {
        // window.location.href = '/testimonials';


        return (
            <div>
            <a id="top"></a>
            <div className="parallax-container">
                <div className="parallax">
                    <img src="../../img/other/corgi1.jpg"/>
                </div>
            </div>            
            
           
                <h3 id="headerTestimonial" >Our Stories</h3>


                
                <div id="sidebar">
                    <Scrollchor to="#calm"><h5>Calm</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#clean"><h5>Clean Teeth</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#clear"><h5>Clear</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#digest"><h5>Digest</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#eye"><h5>Eye</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#fur"><h5>Fur</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#gain"><h5>Gain</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#happy"><h5>Happy</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#kidney"><h5>Kidney</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#relief"><h5>Relief</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#repair"><h5>Repair</h5></Scrollchor>
                    <h5>|</h5>
                    <Scrollchor to="#vitality"><h5>Vitality</h5></Scrollchor>              
                </div>              
                
        <div className="testimonials">
                <div id="scrollup">
                   <Scrollchor to="#top"><i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i></Scrollchor>
                </div>
                    <div className="tabitha">
                        <p></p>
                    </div>
                    <h4 id="calm">Calm Fans</h4>
                    <div className="calm grid">
                        
                        <div className="grid-item">
                            
                            <h5>Eduardo’s story</h5>
                            
                            <p>“Eduardo has been thrown off his schedule a bit lately. We have been using Calm at bedtime to help get ready for bed.  He gets super sleepy, super quick.  He also seems to be more restful all night long-  not getting up and moving around.  At first he was wary of this “stuff”  I was putting on him, now as soon as he sees the bottle he comes and licks it right out of the dropper.”</p>
                            <h6>Christina K (Columbia, MO)</h6>
                        </div>                                 
                        <div className="grid-item">
                            
                            <p> “So Kylei started adding drops to his food and over time she can see a difference.  For one thing she notices he isn’t as snappy with the kids, and just seems lots more CALM, and he is up and running around now like a youngster that he was before the DRUG REACTION.  I sent Amy an email recently to tell her how well Bear is doing and we also talked about Stella’s eyes and how concerned I am about it going into something very serious.  She generously is sending us her EYE’S to try to help with her dry eye issue.  Stella has NO tears at all so she often has muscus forming in her eyes and she has a brown pigment all over her big eyes.  This contributes to her blindness.  So we are thanking AMY at EPIC PET HEALTH for being so helpful to Bear and Stella.  We wish everyone who invested in pet health were as kind and thoughtful as she is.  We will be letting you guys know how it works with Stella’s eyes.”</p>
                            <a href="http://stellroselong.blogspot.com/2013/08/epic-and-bear.html"><h6>Stell Rose Long Blog</h6></a>
                        </div> 
                        <div className="grid-item">
                            <h5>Really takes off the edge of anxiety-related barking!</h5>
                            <p>“When Simon, my 12yo cattle dog mix, is separated from me while I feed my other dogs, he becomes anxious and begins to bark loudly, sharply and continuously until I return. I believe that only increases his anxiety. He would even lose interest in his filled KONG or bone I gave him to keep him occupied. After only 3 days of using “Calm,” I noticed a significant drop in the volume and amount of Simon’s barking, and an increase in length of time he was busy with his KONG or bone. I highly recommend “Calm” as part of your multifaceted approach to chronic anxiety in your dog!”</p>
                            <h6>Halina K</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Helps calm my overactive dog</h5>
                            <p>“I have a young pug who is so smart and active she would almost drive me crazy sometimes in the evenings. And getting her to settle down for bed was a real challenge. I decided to give CALM a try. After a week of using this supplement there was a noticable difference, the biggest being she would settle down easily at bedtime. I knew for sure it was working when I did not give it to her for a few days and she was back to bouncing off the walls with energy. I was so happy with the CALM that I purchased a 2 oz bottle here when my 1 oz bottle ran out. It definitely has helped keep me sane!”</p>
                            <h6>Linda B</h6>
                        </div>
                        <div className="grid-item">
                            <h5>It works!</h5>
                            <p>“I use several of the Epic products and always have great results. Easy to use, effective, and so much better than drugs.”</p>
                            <h6>Kiki (Dallas, TX)</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Help with car-sick pup</h5>
                            <p>“Our 1 year old pup, Eduardo, is very anxious in the car and gets car sick. We add Calm to his water dish about an hour before we leave and then use a spray in the car once on our way. He still doesn’t like the car but there is much less vomiting and he much more relaxed.”</p>
                            <h6>makesscents</h6>
                        </div>
                       </div>                        
                    </div>
                <div className="parallax-container">
                <div className="parallax">
                    <img src="../../img/other/cat.jpeg"/>
                </div>
            </div>   
            <div className="testimonials">
                    <h4 id="clean">Clean Teeth Fans</h4>
                    <div className="clean-teeth grid" >
                        
                        <div className="grid-item">
                            <h5>Great product for cat lovers!</h5>
                            <p>“Our cats have tarter build up and I was using another product, but the cats recognized the bottle and would run away. So I started using Teeth and was amazed that it worked! I put a little in their food and water and their teeth are slowly getting cleaner. They’ll still need a professional teeth cleaning, but at least I have a great product that will maintain cleaner teeth in the future that our cats won’t run away from :) ”</p>
                            <h6>Kimberly G</h6>
                        </div>
                        <div className="grid-item">
                            
                            <p>“My cat and I are very happy to have found it. After just one week my cat is eating better.”</p>
                            <h6>Olivia R</h6>
                        </div>
                        <div className="grid-item">
                            <h5> Best product I have tried for my dog’s teeth</h5>
                            <p>“I was skeptical about buying this product because I had tried a few different ones to try and keep my dogs teeth cleaned. I am so glad I decided to give it a try. Within 3 weeks of using one spray a day on his food, the tartar is gone and his breath smells so much better. I would highly recommend this product!”</p>
                            <h6>Doreen C</h6>
                        </div>
                        <div className="grid-item">
                            
                            <p>“I have been using Clean Teeth on my geriatric cat Scarlett, age 16 years, for 6 months and have noticed a definite difference in her breath, which now has little to no odor, and her gums are now a lot pinker. I am very happy to have found Clean Teeth for Scarlett because she has had dental problems during the past 5 years and visiting the vet is always a traumatic experience for her. I am confident Clean Teeth is making a difference in Scarlett’s tooth health and will hopefully help her avoid “bad tooth news” at the vet when she goes in for her checkups. Clean Teeth will definitely always be part of Scarlett’s health maintenance program.</p>
                            <h6>Barb J</h6>
                        </div>
                       
                        <div className="grid-item">
                            
                            <p>”This is a new one that Amy is trying, and I gotta say….it’s a winner! Now, I have pretty good toothers, butts Ma had noticed some slight yellowing of my canines. She also put this in my water just once a day, and guess what?? It worked!  Yups, the yellowing is gone! Yea!! Ma was really  happy about this cause doggie dental care is very important, and tooth problems are not funs at all!!”</p>
                            <a href="http://www.rubytheairedalepup.com/2013/07/review-epic-pet-health_12.html"><h6>Ruby The Airedale Blog</h6></a>
                        </div>
                    </div>
                    <h4 id="clear">Clear Fans</h4>
                    <div className="clear grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <h5>Awesome product!</h5>
                            <p>“I want to thank you so very much for the Skin and Clear formulas!!!  My little one has had incredible shifts in her immune system, and we have had no allergic reactions to anything in months!  No coughing or wheezing and that is a huge relief.”</p>
                            <h6>Kristin HT (Newfane, NY)</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Love it!</h5>
                            <p>“Love it! Using this on both my dogs and it helps their allergies a lot. They don’t mind having it sprayed directly on them. Also put it on their food. Great product!”</p>
                            <h6>Kiki</h6>
                        </div>
                    </div>
                    <h4 id="digest">Digest Fans</h4>
                    <div className="digest grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <p>“Now this one is for dogs and cats with gas pain (yes, yes, I gets the farts!!! BOL) and, it also reduces bad breath (I don’t have this particular problem) and promotes normal, healthy digestion. Anyhu, did it help? YES!!! Ma was really shocked puppers, shocked! She put it in my water just once a day ( you can use it up to 3 times a day!), and it took away almost all my ‘stink’! A couple of days she forgot to put it in my water, and she really noticed the difference.”</p>
                            <a href="http://www.rubytheairedalepup.com/2013/07/review-epic-pet-health_12.html"><h6> Ruby The Airedale Blog</h6></a>
                        </div>
                    </div>
                    <h4 id="eye">Eye Fans</h4>
                    <div className="eye grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <h5>Another great product by Epic!</h5>
                            <p>“This really helps with my dogs’ “allergy eyes”. Since I started using it, I see a marked improvement in drainage and thick discharge.  This is something I don’t ever want to run out of!”</p>
                            <h6>Kiki</h6>
                        </div>
                    </div>
                    <h4 id="fur">Fur Fans</h4>
                    <div className="fur grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            
                            <p>“Since I am taking the supplement for the pain in my leg, Lee has noticed a change in my coat. Even my vet said how nice my coat was looking, my furs are much thicker and coarser. Coarser usually means low, common, or inferior quality, but not in this instance. I, Sweet William The Scot, mean more coarse like a double scottie coat.  We Scots have a double (hard wiry & soft under) coat. So there you have it ~ my day is sitting here watching the Black Eyed Susans grow and admiring my furs.”</p>
                            <a href="http://sweetwilliamthescot.blogspot.com/"><h6>Sweet William The Scot Blog</h6></a>
                        </div>
                    </div>
                    <h4 id="gain">Gain Fans</h4>
                    <div className="gain grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                       
                        <div className="grid-item">
                            
                            <p>“I was given gain, align, calm and repair. I have tested them all. You can spray the supplements onto food or water, and on the skin to proved maximum effect. I can confidently say that all the supplements work. Boston has always struggled to keep weight on, and she’s never looked this good. The Calm worked well, too! I’m not sure about the Align, as I thankfully I have no issues there, but it hasn’t hurt and makes Mom feel good. 5/5 stars!</p>
                            <a href="http://dachshundnola.blogspot.com/2013/07/review-day-and-giveaways.html"><h6>Dachshund Nola Blog</h6></a>
                        </div>
                    </div>
                    </div>
    <div className="parallax-container">
                <div className="parallax">
                    <img src="../../img/other/dog2.jpg"/>
                </div>
            </div>   
            <div className="testimonials">

                    <h4 id="happy">Happy Fans</h4>
                    <div className="happy grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <h5>Alfie’s Story</h5>
                            <p>“My two kitties were mourning the loss of their sister to cancer in Feb 2012.  I met Amy a month after and I explained how they were not eating.  Alfie, the most attached to his sister, would sit on his chair and make his call that would normally bring his sister running to his side.  He would do this incessantly, it was heartbreaking.  Amy suggested two formulas, Happy  and Vitality.  Slowly it has made a HUGE difference.  All are working well.  They are easy to use and the kitties consume them quite nicely.  I’m very happy with all results!”</p>
                            <h6>Susie H (Seattle, WA)</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Recommend for stressful situations</h5>
                            <p>“I’ve used both the Happy spray and drops for my dogs to alleviate their stress during fireworks. When I know of local park celebrations that include fireworks, I’ve used the product the day before and of the event, and they don’t bounce off the walls. It works!”</p>
                            <h6>Marianne W Exton PA</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Makes me happy!</h5>
                            <p>“My cats have been taking happy in their water, food, and on their body to alleviate the stress of a multicat household. My little cat Olive is much more cuddly and all of the rest are less bothered by the other cats: standing together at mealtime, hanging out together on the porch, and enjoying life together a bit more. No spraying or marking either!”</p>
                            <h6>Seanna</h6>
                        </div>
                        <div className="grid-item">
                            <h5>I recommend this product because… </h5>
                            <p>“This is a reorder of this wonderful product. I use it because it works. My kitty is not as stressed when I leave him alone.”</p>
                            <h6>Adele</h6>
                        </div>
                        <div className="grid-item">
                            <h5>It works!</h5>
                            <p>“This is great stuff. I use it on my 11 year old Chinese Crested and it has made a huge difference. She is less anxious and more playful. Have just ordered my second bottle.”</p>
                            <h6>Kiki Dallas, TX</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Love, love, love it!</h5>
                            <p>“Such a great product. So pleased with the results & are looking forward to trying all the other products in the Epic Pet Health line. 5 stars for sure – Thanks again for creating such a great product!”</p>
                            <h6>J Luke</h6>
                        </div>
                        <div className="grid-item">
                            <h5>This stuff is amazing!</h5>
                            <p>“We’ve had several major earthquakes recently, and my poor kitties have been scared beyond belief. Diego, our younger kitty, refused to come out from under the bed. I spritzed some of the ‘Happy’ into his food, and shortly after he came out! It really does seem to have helped, and I can’t recommend this product enough. I use it now anytime we’ve had storms or fireworks, and it’s been fantastic.”</p>
                            <h6>Chel</h6>
                        </div>
                        <div className="grid-item">
                            
                            <p>“OMC. I am so, so, so grateful for your ‘Happy’ formula right now!!! It’s helped us all to feel better after the earthquakes! Hammy finally came out from under the bed and ate the food with the ‘Happy’ in it and he’s been SO much better (he no longer walks really low to the ground and jumps at every noise!) Amazing stuff, thank you so much.”</p>
                            <h6>d’Artagnan Ruskin</h6>
                        </div>
                        <div className="grid-item">
                            
                            <p>“I wanted to let you know that I ordered this second bottle of Happy for my dog, Molly because I am seeing some definite improvement in her anxiety.  She is extremely sound sensitive, and has extreme reactions to noise.  This makes it hard, especially on walks because I can’t anticipate and ensure there won’t be a sudden noise that will startle her, and cause the panic and disassociation.  I found l-theanine back in April, and that has helped.  Some things I have noticed since starting Happy  – 1) She has always run and hid when the baby gate is rattled and she no longer does that, 2) sometimes I have birds fly into my picture window, which would cause her to hide in the bathtub, and the two times this has happened since starting Happy, she has instead gone to the window and checked it out, 3) when out on walks, when she has heard startling noises, she still reacts, but does not start the wild eyed panic coupled with wanting to lunge and run back home or to the car.  I am able to ‘reach her’ and help her settle back in and walk more calmly, and 4) I feel she has less of the general free floating anxiety that she has been most of her life. Thank you!</p>
                            <h6>Julie L, Madison, WI</h6>
                        </div>
                    </div>
                    <h4 id="kidney">Kidney Fans</h4>
                    <div className="kidney grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <h5>Huge improvement!</h5>
                            <p>“Our old cat, Hatton, suffers from urethral blockages. He has been on prescription food for most of his life. We have had 3 hospitalizations and made the decision to not medically interfere if he had another one. A kitten adopted us and Hatton was quite upset and stressed about it. He began showing signs of another blockage, we began adding Calm and Relief to his food for his stress and obvious pain. Those were on hand and offered relief. We got Kidneys and all signs of blockage are now gone.”</p>
                            <h6>makesscents</h6>
                        </div>
                    </div>
                    <h4 id="relief">Relief Fans</h4>
                    <div className="relief grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            
                            <p>“I recently learned about Epic Pet Health and it was difficult for me to decide which product to order first. I went with Relief, because two of our dogs have arthritis. I spray Relief in their water and directly on the area that bothers them, rubbing it into their skin. I’ve noticed a difference in our dogs’ gait and I’m happy to be able to provide them something to alleviate the pain without pumping them full of pain killers.

If place an order, I’d suggest ordering several bottles of Relief or several items from the Epic Pet Health store, because 2-day shipping is spendy and as an impatient dog parent, I wanted the product as quickly as possible. Make the shipping worth it by ordering other products – Epic Pet Health offers several that are amazing. Calm, to keep our dogs calm when we leave for the day, Skin, to relieve irritated skin issues, and Repair for minor injuries.

We still visit our veterinarian for check ups, but it’s nice to have an option that’s less chemical and more natural. I’ll definitely be ordering more products from Epic Pet Health.”</p>
                            <h6>Kimberly D. Gauthier, Keep the Tail Wagging Magazine</h6>
                        </div>
                    </div>
                    <h4 id="repair">Repair Fans</h4>
                    <div className="repair grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <h5>Great for feline acne if paired with “Skin”</h5>
                            <p>“I wrote another review for the ‘Skin’ formula as well… one of my kitties suffers from feline acne on his jawline. After about a week of using the ‘Skin’ combined with ‘Repair’ I noticed an improvement, and after a couple of weeks it had cleared up entirely. Any time I see a sign that it might flair up, I spritz some on to his food.”</p>
                            <h6>Chel</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Why I love Repair</h5>
                            <p>“Repair by Epic Pet Health has worked miracles for my geriatric cat, Scarlett.
Before using Repair, Scarlett, almost 16 years old, was having difficulty getting up from a sitting position and also getting up when she had been lying down for even a short time. Scarlett was also having problems jumping up on her favorite couch and any elevated area. Within 24 hours of spraying Repair on Scarlett’s legs and adding it to her drinking water, she was getting up with ease from a sitting or lying position and also jumping up on the couch without difficulty or hesitation. Repair has made a tremendous difference in Scarlett’s quality of life. I plan to continue to use Repair as part of Scarlett’s health and maintenance plan to support her continued good health. Scarlett is definitely a more playful and much happier cat thanks to Repair.”</p>
                            <h6>Barb J</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Immune system support</h5>
                            <p>“My cat suffers from breakouts on his lips that come from an unhealthy immune system. I started out putting 6 drops on his food twice a day and after 3 weeks I took it back to 6 drops once a day. No more breakouts. I’m so happy for him!”</p>
                            <h6>Olivia Rich</h6>
                        </div>
                        <div className="grid-item">
                            <h5>All the Epic formulas are great!</h5>
                            <p>“I adopted a tiny chihuahua from a rescue group and when she drank a lot of water, she would start to gag, then cough up this slimy water. Dr. Amy recommended the Repair, and within a couple of weeks, the symptoms stopped. I really appreciate how Dr. Amy is always happy to offer recommendations, and then follows up to make sure I’m getting good results.”</p>
                            <h6>Kiki (Dallas, TX)</h6>
                        </div>
                        <div className="grid-item">
                            <h5>This supplement is amazing!</h5>
                            <p>“I used this on my dog’s large hot spot and it was reduced by half in size and dried in 2 days. By day 4 the hot spot was gone. I have used other products in the Epic Pet line with equally dramatic results. Dr. Swartz is really on to something with these formulas.”</p>
                            <h6>M. Rush Gillespie</h6>
                        </div>
                        <div className="grid-item">
                            
                            <p>“Another excellent product by Epic! But my favorite Epic product is vitality! Vitality has made such a difference in my pups life. He is 10 years old & I noticed a big improvement in his energy level & he seemed happier! I have recommended to neighbors and they noticed an improvement in their pets as well. Thank you for improving my pups health!”</p>
                            <h6>MaryEllen</h6>
                        </div>
                        <div className="grid-item">
                            
                            <p>“I met you at POP. I bought a bottle of the Repair. It sure has helped my girl stop licking/nibbling at her lump. I did take her to the vet and he recommended removing the lump and it will biopsied. She’ll have the surgery this coming Friday. Hopefully it’s nothing and it will eliminate future irritation! Thank you!” </p>
                            <h6>Tracey Thompson</h6>
                        </div>
                    </div>
                    <h4 id="skin">Skin Fans</h4>
                    <div className="skin grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                        <div className="grid-item">
                            <h5>It works!</h5>
                            <p>“I noticed an improvement of my cat’s hair after a couple weeks. It is almost a month and his hair is shinny and healthy looking. He still has a little flaking and I think and hope it will go away in another couple of weeks. I would recommend this product to any pet who suffers skin ailments. IT WORKS! :-)</p>
                            <h6>Sturnangel</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Great for feline acne when paired with “Repair”</h5>
                            <p>“One of my kitties suffers from feline acne on his jawline. After about a week of using the ‘Skin’ combined with ‘Repair’ I noticed an improvement, and after a couple of weeks it had cleared up entirely. Any time I see a sign that it might flair up, I spritz some on to his food.”</p>
                            <h6>chel</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Works on hot spots!</h5>
                            <p>““My pup had a persistent hot spot on her back foot that she would not leave alone. After many weeks in a cone and trying other products, it was not getting better and she was pretty miserable. I received a sample of Epic Skin from a friend, and within two weeks the hot spot was gone! Her entire coat has improved greatly, it feels much softer and she is happy to be cone free! I have ordered another bottle, and have recommended it to friends.”</p>
                            <h6>Maggie</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Oz the Terrier’s Story</h5>
                            <p>“Ma and I were completely skeptical that the Skin supplement would work! Nothing has gotten rid of this itchy rash for long. It looks and smells like water so we thought “this is never going to work”. But almost immediately the Skin relieved the itching. Ma noticed that I was scratching and chewing a lot less. We followed the directions and sprayed it on my rash as well as on my food and water. We used Skin for one week, without the Repair. Once we added the Repair though, the rash really started healing up. It’s been two weeks now and my rash is almost gone.”</p>
                            
                        </div>
                    </div>
                    <h4 id="vitality">Vitality Fans</h4>
                    <div className="vitality grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 20}'>
                        
                    
                        <div className="grid-item">
                            <h5>Taylor’s story</h5>
                            <p>“My feline companion is a gregarious 12 year old. He was beginning to show some decline in his normal active routine and seemed less engaged in his usual playfulness. When I started him on Vitality he was back to his old self and being a feline nuisance within a few days.  I am elated!”</p>
                            <h6>Adele K (Dallas, TX)</h6>
                        </div>
                        <div className="grid-item">
                            <h5>Safe and effective</h5>
                            <p>“I started using this when my 13 year old dog was feeling a little lethargic. Her energy level has improved, and she’s even playing with her toys again. Love it!”</p>
                            <h6>Kiki</h6>
                        </div>
                        <div className="grid-item">
                            <h5>I recommend this product!</h5>
                            <p>“My 14 year old feline has more energy after starting this formula. I will keep him on it for good.”</p>
                            <h6>Adele</h6>
                        </div>
                    </div>

                    </div>
             </div>
               
           
           
        );
    }
}