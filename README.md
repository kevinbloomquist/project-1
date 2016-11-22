  _________.___   _____ __________.____     ___________   _________.___   _____   ________    _______   
 /   _____/|   | /     \\______   \    |    \_   _____/  /   _____/|   | /     \  \_____  \   \      \  
 \_____  \ |   |/  \ /  \|     ___/    |     |    __)_   \_____  \ |   |/  \ /  \  /   |   \  /   |   \ 
 /        \|   /    Y    \    |   |    |___  |        \  /        \|   /    Y    \/    |    \/    |    \
/_______  /|___\____|__  /____|   |_______ \/_______  / /_______  /|___\____|__  /\_______  /\____|__  /
        \/             \/                 \/        \/          \/             \/         \/         \/ 
----------------------------------------->Kevin Bloomquist<----------------------------------------------
                                            GA WDI Denver







Hello!

	Thank you for playing "SIMPLE SIMON". Below is a living document describing the assignment, approaches to and reflections on the process as I worked through the project, problems as yet unsolved, and  some working ideas for future versions. Your feedback is welcome and would be very much appreciated so please feel free to reach out.

	Have fun!

	-K



https://kevinbloomquist.github.io/project-1/index.html

#Project #1: The Game

### Overview

Let's start out with something fun - **a game!**

---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Switch turns** between two players
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript or jQuery** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Approaches and Reflections

The project is written mainly using HTML, CSS, and Javascript. You'l notice a little Underscore JS and JQuery sprinkled in, either as a shortcut or as a workaround to a problem.

I wanted to make a game that felt clean and simple...familiar yet new. I wanted it to have a comfortable and challenging feel and I wanted it to have functionality that you were drawn to and want to interact with.
I also wanted to explore alternative progress metrics (in this first version that takes the form of background color).

The backbone of the game is based largely on the generation of a random array of values 1-4. Each value steers a switch to trigger CSS changes in the html divs that constitute the game board. Once the sequence has ended the player can then try to emulate the sequence which generates a response array. When the length of the response array equals that of the sequence array (useArray) the two are compared for accuracy and the player is alerted of his/her success. Then the sequence is extended by one more random number (by clicking GO) and the cycle repeats.

* challenge climax: Timing/ timer issues.

*Major takeaways/Concepts so far:

- Breadcrumbs!!! I appreciated the utility of console.logging before this project but through this process I really refined the art of logging and gained a better understanding of exactly where to place and how to label the log to best express what is happening in the document flow.

- Noticed meta-patterns in workflow, style, and problem solving rituals.
i.e. Quarantine/block technique developed

- Document flow and scope (more detailed understanding)

*This project is great for:
- Working with and comparing Arrays
- Understanding timers and document flow
- Working with random values

*Currently working through/hope to add:

Style:
- Animations/ ctx landing (opening sequence) and index (round change bullet line)
- finesse color pallete
- ability to change themes

Function:
- Add multiple players
- box color complement transitions (difficulty)

Organization:
- clean up and DRY code out


---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_

---
