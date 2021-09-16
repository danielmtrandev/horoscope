function generatehoroscope(){
    const day = document.querySelector('#day-input').value;
    const month = document.querySelector('#month-input').value;


    if (month == 1 && day >= 20 && day <= 31 || month == 2 && day > 0 && day <= 18) {
        document.querySelector('h3').innerText = 'Aquarius'
        document.querySelector('h2').innerText = 'Aquarians are the aliens of the zodiac—they’re ahead of their time, and think extremely out of the box (the box is nowhere in sight). They are complete humanitarians and always look at the big picture to make the world a better place. They’re weird, but in an endearing way—they have a ton of friends from all different walks of life. Power Color: Blue. As a water bearer, Aquarians bring knowledge to the world, and blue helps calm and center them as their thoughts spiral into a million different directions.'
        document.querySelector('.results-pic').src = 'images/aquarius.png'

    } 
    else if (month == 2 && day >= 19 && day <= 29 || month == 3 && day > 0 && day <= 20){
        document.querySelector('h3').innerText = 'Pisces'
        document.querySelector('h2').innerText = 'Pisces are highly imaginative, with a penchant for arts and romance. As a water sign, they feel a lot—and express those feelings a lot, as well. They tend to have their heads in the clouds, with a dreaminess and intuition that often needs to be a bit grounded. Power Color: Seafoam Green or aquamarine. Pisces—the fish—thrive when surrounded by colors of the sea, which helps them restore their energy.'
        document.querySelector('.results-pic').src = 'images/pisces.png'

    } 
    else if (month == 3 && day >= 21 && day <= 31 || month == 4 && day > 0 && day <=19){
        document.querySelector('h3').innerText = 'Aries'
        document.querySelector('h2').innerText = 'Those who fall under Aries are fiery, passionate, and a bit stubborn. They’re natural-born leaders who love adventure and competition, and enjoy being independent. An Aries has a seemingly endless amount of energy, and can be quite spontaneous. Aries Power Color: Red. It’s no surprise that a fire sign likes yours thrives when surrounded by red—it’s the color of passion, courage, and excitement. Plus, red is a great hue when looking to stir up those creative juices.'
        document.querySelector('.results-pic').src = 'images/aries.png'

    } 
    else if (month == 4 && day >= 20 && day <= 30 || month == 5 && day > 0 && day <=20){
        document.querySelector('h3').innerText = 'Taurus'
        document.querySelector('h2').innerText = 'Taureans are grounded and trustworthy, with a good head on their shoulders when it comes to practical matters—they’re the ones you know made the reservation ahead of time and called to tell the restaurant that you’re celebrating a birthday. They love treating themselves (and the ones they love) with little bits of luxury and material things—it’s how they show they care. Taurus Power Color: Green. Not only is it grounded in nature, but green also has a vivaciousness that helps Taureans feel revitalized. Not to mention, it’s also the color of wealth—something Taurus signs value highly.'
        document.querySelector('.results-pic').src = 'images/taurus.png'

    } 
    else if (month == 5 && day >= 21 && day <= 31 || month == 6 && day > 0 && day <=20){
        document.querySelector('h3').innerText = 'Gemini'
        document.querySelector('h2').innerText = 'Gemini is the sign of twins, which means that people who fall under Gemini tend to have two sides to their personality—one vivacious and talkative, and the other highly inquisitive, thoughtful, and a bit restless. They’re extremely quick-witted, and never at a loss for words. By nature, they’re sociable and make others feel at ease. Gemini Power Color: Yellow. Yellow is bright (it’s literally the brightest color of the visible spectrum), cheerful, and energetic—much like a Gemini. It inspires original thought and happiness, and is the perfect suit for a Gemini personality.'
        document.querySelector('.results-pic').src = 'images/gemini.png'

    } 
    else if (month == 6 && day >= 21 && day <= 30 || month == 7 && day > 0 && day <= 22){
        document.querySelector('h3').innerText = 'Cancer'
        document.querySelector('h2').innerText = 'Cancers are emotional and empathetic—they experience the world through feeling, and are always the first to lend a listening ear. Compassionate and nurturing, they’re highly sensitive to their surroundings and the moods of the people they love. You won’t get anything past a Cancer. Cancer Power Color: Silver or metallic grey. Cancers are ruled by the moon, so it makes sense that ethereal silvers and greys are their power colors.'
        document.querySelector('.results-pic').src = 'images/cancer.png'

    } 
    else if (month == 7 && day >= 23 && day <= 31 || month == 8 && day > 0 && day <= 22){
        document.querySelector('h3').innerText = 'Leo'
        document.querySelector('h2').innerText = 'Leos are the star of the show. They are charismatic and charming, with an almost magnetic pull to them. They can be impatient and blunt, but never truly malicious (well, until you hurt them). They love drama, theatrics, and encouraging others to express their true selves. Leo Power Color: Orange. There’s nothing more head-turning than the color orange, and the bold color is just what a Leo needs to feel at home.'
        document.querySelector('.results-pic').src = 'images/leo.png'

    } 
    else if (month == 8 && day >= 23 && day <= 31 || month == 9 && day > 0 && day <=22){
        document.querySelector('h3').innerText = 'Virgo'
        document.querySelector('h2').innerText = 'Virgos are perfectionists through and through. They have incredible attention to detail and are master planners. They have a deep love of humanity, but can come off as reserved or critical before opening up. Their analytical minds are something to behold—we’re talking CEO status. Virgo Power Color: Brown. The subtle hue is much like the Virgo—the backbone of any good color scheme, and a true workhorse in the design world. It helps ground Virgo’s overthinking mind, as well.'
        document.querySelector('.results-pic').src = 'images/virgo.png'

    } 
    else if (month == 9 && day >=23 && day <= 30 || month == 10 && day > 0 && day <=22){
        document.querySelector('h3').innerText = 'Libra'
        document.querySelector('h2').innerText = 'Libras love beauty. They strive to create something beautiful out of every part of their lives, and seek balance in all aspects of their lives as well. They adore banter and witticisms, and will always be judicious in their relationships with friends, family, and partners. Libra Power Color: Pink. A serene, pale pink adds just the right amount of femininity to a space.'
        document.querySelector('.results-pic').src = 'images/libra.png'

    } 
    else if (month == 10 && day >= 23 && day <= 31 || month == 11 && day > 0 && day <= 21){
        document.querySelector('h3').innerText = 'Scorpio'
        document.querySelector('h2').innerText = 'Scorpios never truly say what they’re thinking—at least, not at first—and can come off quite mysterious. They’re even said to be somewhat clairvoyant, with an incredible observational tendency and intensity. They don’t mince words and have an emotional depth that is quite astounding. Power Color: Black. This intense shade (or absence of color) makes complete sense for Scorpio, who loves nothing more than to keep people guessing.'
        document.querySelector('.results-pic').src = 'images/scorpio.png'

    } 
    else if (month == 11 && day >= 22 && day <= 30 || month == 12 && day > 0 && day <=21){
        document.querySelector('h3').innerText = 'Sagittarius'
        document.querySelector('h2').innerText = 'Sagittarians are gregarious adventurers, ready to blaze new trails and make new friends wherever they go. They’re sociable by nature, but intense thinkers, with a creative and global mindset that helps them solve many problems. That one friend who everyone thinks is his or her best friend? Yeah, it’s probably a Sagittarius. Power Color: Purple. Creative and clever, purple speaks to the soul of a Sagittarian and will help them think outside of the box.'
        document.querySelector('.results-pic').src = 'images/sagittarius.png'

    } 
    else if (month == 12 && day >= 22 && day <= 31 || month == 1 && day > 0 && day <= 19){
        document.querySelector('h3').innerText = 'Capricorn'
        document.querySelector('h2').innerText = 'Capricorns are ambitious, with an innate sense of individuality that makes them fantastic workers and organizers. They don’t shy away from big projects, and are realistic with a sense of self-control that would rival anyone else’s. They have huge hearts and are sensitive without being too overly emotional—sympathy is their middle name. Power Color: Charcoal Grey. The strong neutral is practical but makes a statement, much like the Capricorn sign.'
        document.querySelector('.results-pic').src = 'images/capricorn.png'

    }   
    else {
        document.querySelector('h2').innerText = "Enter Valid Date Values";
    }
}

document.querySelector('button').addEventListener('click', generatehoroscope)