// 2021-01-24  Juhani Välimäki
// ES5,6,7,(8,9) task prepping for the exam and the project
// Create a JS program, where you just use as many of the first exam features as you 
// can = learn them for the exam

// The business value of the app can be 0, as such, although some parts might become
// useful in th project.
// Create a UI if wish, or just play behind the scenes and print to 
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax
// e.g. class HealthStats later

// Pieces of info are markings, that might exist daily, or just for every 2-7 days
// With this info (Starting from most important, then more to allow more features/stats)

// * date - e.g. Date ,  with maybe no use for the hours in this case
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date - Maybe only day part
//   Good question: String in UI, Date in Front-end, What kind of String(?) in JSON, Date(?) in future Back-end, DATE(?) in RDB  

// * weight - Number, with one decimal, e.g. 96.4   (kg)   (0.1 kg accuracy)

// * waist - Number, maybe one decimal, e.g. 100.5   (cm)  (Half a centimeter accuracy)

// * kCal - Number, no decimal, e.g. 512     (kCal), amount of energy spent in exercise/sports

// * slept - Boolean,  true or fals,   meaning if the nightly sleep before the day was good/okay or not

// (Not here, but could be e.g. rest heart rate beats per minute - BPM )

// Now what could be information that is allowed to be missing is a "design decision", that 
// naturally affects the statistical analysis. E.g. clearly date cannot be missing. But kCal
// could be (then assuming no sports that day). Possibly also slept value (maybe assuming
// good sleep if not marked?).  
// Well, no anwers here, but good fuel for your design brain in general. Cases are never 100% straight forward
// For processing, if we decide so, the missing data could be assumed or interpolated there

import React from 'react';



export default function HealthStats() {
        const userInfo = { name:"Mike", height:175, dob:new Date(1989, 0, 31), 
        maxBpm: 188, weightGoal:85.0, waistGoal:95.5, dateGoal:new Date(2021,6,1) };

        const stats = [  
     {date:new Date(2021, 0, 25), weight:96.4, waist:106.5, kCal:0,    slept:true,   },

     {date:new Date(2021, 0, 27), weight:97.2, waist:105.0, kCal:512,                },

     {date:new Date(2021, 1, 1),  weight:99.1, waist:108.0, kCal:1150, slept:false,  },
     {date:new Date(2021, 1, 2),  weight:99.0, waist:107.5,            slept:true,   },
     
     {date:new Date(2021, 1, 4),                            kCal:666                 },
     {date:new Date(2021, 1, 5),  weight:98.9, waist:107.0,            slept:false,  },
];        
        //printing to the console strigifying the json data
        console.log(JSON.stringify(userInfo))
        console.log(JSON.stringify(stats))
        const today = new Date();
        const daysToGoals = () => {
               let differenceInTime =  userInfo.dateGoal.getTime() - today.getTime();
               let remaining_days = differenceInTime / (1000*3600*24); 
               return remaining_days.toFixed(0);
        }

        const newTarget =(weight, waist) =>  {
               let lose_weight =  weight -userInfo.weightGoal ;
               let lose_waist = waist -userInfo.waistGoal ;
               console.log('you need to lose ' + lose_weight.toFixed(2)+ 'kg weight');
               console.log('you need to lose ' + lose_waist.toFixed(2) + 'cm waist');
               return (
                       <div>
                       <li>`current weight = ${weight}, you need to lose weight = ${lose_weight}` </li>
                       <li>`current weight = ${waist}, you need to lose weight = ${lose_waist}` </li>
                       </div>
                       )
        }

        const newData = ()  => {
                return <li>hi</li>
        }
        //console.log(stats.map(stats => stats.weight));
        const dailyReport = () => {
                stats.map(stats => {
                let weight = stats.weight;
                let waist = stats.waist;
                console.log(waist)
                return newTarget(weight, waist);
                }
                 );
        }

        console.log(daysToGoals())

        return (
                <div>
                 <h2> {userInfo.name} Here is your statistics </h2>
                 <li>{daysToGoals()} days remaining to meet the goal</li>
                {dailyReport()}
                
                </div>
        )
}


// Tasks: 


// Task 1: (atm only think) This kind of case would require a lot of test data that would be similar 
// to real life data. E.g. weight will not jump like 50.3 kg, 55.4 kg, 49.9, and so on.
// It's easy for the person measured over time to create natural stats like this. 
// But think how could you create similar test data, like five years of authentic looking data
// without typing all in manually?    
// That's about 5*200*4 = 4 000 logical interconnected data points 
// (Test data generation is a typical challenge in our customer projects)


// Task 2: Then do whatever reports / analysis or so, with all the measurements you hard-coded above


// Task 3: Turn the data into JSON and back and make sure it still is valid and same information
// Take a copy of than JSON as text. We usually need such JSON text (both format of the JSON and
// some data are needed) for tests anyway!


// Task 4: If want to, start thinking how to generate data. JavaScript is not the best suited
// for that task, compared to e.g. Python. But if want, you can do with JavaScript as well. 