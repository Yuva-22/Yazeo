import React from "react";
import Product from "./Product";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="home.jpg"
          alt="image"
        />
        <div className="home__row">
          <Product
            id="6"
            title="Wings Vader 200 Wired Gaming Headset  (Black, On the Ear)" 
            price="2000"
            image="headset.jpg" 
            rating={5}
          />
          <Product
            id="1"
            title="KENT 16044 Hand Blender Stainless Steel 400 W | Variable Speed Control | Easy to Clean and Store | Low Noise Operation" 
            price="1499" 
            image="blender.jpg" 
            rating={4}
          />
        </div>
        <div className="home__row">
           <Product 
           id="3"
           title="boAt Wave Prime47 Smart Watch with 1.69 HD Display,ASAP Charge,Crest App Health Ecosystem, HR & SpO2 Monitoring" 
           price="1199" 
           image="watch.jpg" 
           rating={3} 
           />
           <Product 
           id="4"
           title="Shining Diva Fashion Multilayer Non Precious Base Metal Cubic Zirconia Golden Neck Chain Necklace for Women" 
           price="168" 
           image="chain.jpg" 
           rating={5}
           />
           <Product 
           id="2"
           title="Baby Walker,3 Level Height Adjustment and 4 Level Seat Adjustment for Baby 6-18 Months with Recreational Toy bar" 
           price="2997"
           image="walker.jpg" 
           rating={4}
           />
            
        </div>
        <div className="home__row">
        <Product
          id="5" 
          title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"  
          price="12999" 
          image="tv.jpg" 
          rating={4}/>
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Concept Kart G40 String Light Bulbs (25 Bulb+1 Spare)| Waterproof Shatterproof Globe Bulbs Lights for Home Decoration" 
            price="1799"
            image="lights.jpg" 
            rating={4}
          />
          <Product
            id="1"
            title="1500W Electric Kettle (Stainless Steel body, 1.5L)" 
            price="599" 
            image="kettle.jpg" 
            rating={4}
          />
        </div>
        <div className="home__row">
           <Product 
           id="3"
           title="Baobab Rattan Wicker Wrought Iron Single Seater Swing Chair With Stand For Adults" 
           price="11699" 
           image="swing.jpg" 
           rating={5} 
           />
           <Product 
           id="4"
           title="Solimo Scarlett Engineered Wood Bookcase " 
           price="5799" 
           image="bookshelf.jpg" 
           rating={3}
           />
           <Product 
           id="2"
           title="Naivete Plastic Rectangular Medicine Box, Medical Box, First aid Box, Multi Purpose Box, Multi Utility Storage with Handle " 
           price="299"
           image="firstaid.jpg" 
           rating={4}
           />
            
        </div>
        <div className="home__row">
        <Product
          id="5" 
          title="Magnolia Fabric 7 Seater LHS  L Shape Sofa"  
          price="23399" 
          image="sofa.jpg" 
          rating={4}/>
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Copper Wire 12 Stars Decorative Curtain 138 LED Lights (Yellow, 2.5 Meter)" 
            price="650"
            image="stars.jpg" 
            rating={5}
          />
          <Product
            id="1"
            title="Premium 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar, Black & Grey" 
            price="2699" 
            image="mixer.jpg" 
            rating={4}
          />
        </div>
        <div className="home__row">
           <Product 
           id="3"
           title=" Dream Catcher with Lights, Wall Hangings, Crafts, Home Decor, Handmade for Bedroom" 
           price="269" 
           image="dreamcatcher.jpg" 
           rating={3} 
           />
           <Product 
           id="4"
           title="Shining Diva Gold Plated Anklets for Women" 
           price="375" 
           image="anklet.jpg" 
           rating={4}
           />
           <Product 
           id="2"
           title="UHUD CRAFTS Beautiful Antique Wooden Fold-able Side Table/End Table/Plant Stand/Stool Living Room Kids Play Furniture Table Round Shape" 
           price="395"
           image="table.jpg" 
           rating={4}
           />
            
        </div>
        <div className="home__row">
        <Product
          id="5" 
          title="Solimo Costa Engineered Wood Queen Bed with Storage ( Brown , Wenge)"  
          price="13999" 
          image="bed.jpg" 
          rating={4}/>
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Snow Foam Lance with 1/4 Quick Connector for Pressure Washer Gun, 33.8-Ounce (1-Liter)" 
            price="979"
            image="snow.jpg" 
            rating={5}
          />
          <Product
            id="1"
            title="Cello Novelty Compact Plastic Cupboard with Shelf(Brown), Standard (CB_NC_wood)" 
            price="2725" 
            image="shelf.jpg" 
            rating={4}
          />
        </div>
        <div className="home__row">
           <Product 
           id="3"
           title="Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery" 
           price="7199" 
           image="phone.jpg" 
           rating={4} 
           />
           <Product 
           id="4"
           title="Art Street Shooting Star Wall Photo Frames for living Room , Set of 16 Photo frames . (Black)" 
           price="1467" 
           image="photo.jpg" 
           rating={5}
           />
           <Product 
           id="2"
           title="Symactive Sprinter S2000 Series, 26T Geared Mountain Bike (Shimano 21-Speed Gear), Front Suspension, Dual Disc Brake, Frame Size: 16.5 inch, Alloy Stem (Blue, Unisex)" 
           price="8899"
           image="cycle.jpg" 
           rating={4}
           />
            
        </div>
        <div className="home__row">
        <Product
          id="5" 
          title="Godrej 244 L 3 Star Frost-Free Inverter Double Door Refrigerator (RF EON 265C RCIF FS ST, Fossil Steel, Convertible"  
          price="25790" 
          image="fridge.jpg" 
          rating={4}/>
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Daikin 1.8 Ton 3 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2022 Model, ATKL60UV16, White)" 
            price="51499"
            image="ac.jpg" 
            rating={5}
          />
          <Product
            id="1"
            title="Alan Jones Clothing Men's Slim Fit Track pants" 
            price="549" 
            image="tracks.jpg" 
            rating={4}
          />
        </div>
        <div className="home__row">
           <Product 
           id="3"
           title="Furniture Cafe Wooden Wall Shelves for Living Room | Wall Shelf for Home Decor Items | Floating Book Rack for Study Room, Office (3Tiers | Size- Standard | Colour- Teak Natural)" 
           price="480" 
           image="wood.jpg" 
           rating={3} 
           />
           <Product 
           id="4"
           title="CRAFT TREE Wood Pooja Mandir/Temple Without Door for Pooja Room | Pooja Mandap | Blue Height 16''" 
           price="799" 
           image="craft.jpg" 
           rating={5}
           />
           <Product 
           id="2"
           title="Women's Cotton Blend Straight Printed Kurta with Pant & Dupatta (Baiyaan)" 
           price="849"
           image="kurta.jpg" 
           rating={4}
           />
            
        </div>
        <div className="home__row">
        <Product
          id="5" 
          title="Solimo Alpha Engineered Wood Wardrobe Imperial Teak , 4 Doors"  
          price="21199" 
          image="wardrobe.jpg" 
          rating={4}/>
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Wooden Twist Rafuf Wooden Intersecting Wall Shelves ( Set of 8 ) (Standard, Red & Black)" 
            price="1415"
            image="woodentwist.jpg" 
            rating={5}
          />
          <Product
            id="1"
            title="Verbier Set of 6 Flashing Led Light Up Goggles/ Light Sunglasses for Night and Birthday Return Gifts for Kids Boys & Girls" 
            price="496" 
            image="verbier.jpg" 
            rating={4}
          />
        </div>
        <div className="home__row">
           <Product 
           id="3"
           title="Bacca Bucci Men's Cross Trainer Mid-Top Sporty Chunky Sneakers for Gym Training and Outdoor Sports | Natural Rubber and EVA Extra Light Outsole | Model: Voyager" 
           price="1598" 
           image="shoe.jpg" 
           rating={3} 
           />
           <Product 
           id="4"
           title="Titan Contemporary Rose Gold Metallic Finish Wall Clock with Silent Sweep Technology - 30 cm x 30 cm" 
           price="1595" 
           image="clock.jpg" 
           rating={5}
           />
           <Product 
           id="2"
           title="Oil and Vinegar Cruet, Seasoning Set for Dining Table (1Set of 2PC)" 
           price="461"
           image="oilset.jpg" 
           rating={1}
           />
            
        </div>
        <div className="home__row">
        <Product
          id="5" 
          title="Solimo Karen Solid Sheesham Wood 4 Seater Dining Table with Chairs and Bench (Teak Finish)"  
          price="17299" 
          image="dining.jpg" 
          rating={4}/>
        </div>
        
      </div>
    </div>
  );
}

export default Home;