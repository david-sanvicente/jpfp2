const { db } = require("./server/db");
const { green, red } = require("chalk");

const Students = require("./server/db/Students");
const Campuses = require("./server/db/Campuses");

const students = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
    email: "skywalkerl@xwing.com",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
    gpa: 3.3
  },
  {
    firstName: "Leia",
    lastName: "Organa",
    email: "rebelprincess@alliance.com",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
    gpa: 4.0
  },
  {
    firstName: "Han",
    lastName: "Solo",
    email: "nerfherder@falcon.com",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg",
    gpa: 2.4
  },
  {
    firstName: "Chewie",
    lastName: "Wookie",
    email: "rawr@falcon.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6d/Chewbacca-2-.jpg",
    gpa: 0.0
  },
  {
    firstName: "Obi-Wan",
    lastName: "Kenobi",
    email: "ben@jedi.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
    gpa: 4.0
  },
  {
    firstName: "C3PO",
    lastName: "Droid",
    email: "sixmillion@alliance.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
    gpa: 4.0
  },
  {
    firstName: "R2D2",
    lastName: "Droid",
    email: "beepboop@alliance.com",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
    gpa: 4.0
  },
  {
    firstName: "Lando",
    lastName: "Calrissian",
    email: "swindler@falcon.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg",
    gpa: 3.0
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    email: "darkside@deathstar.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg",
    gpa: 4.0
  }
];

const campuses = [
  {
    name: "Dagobah",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Dagobah.jpg",
    address: "Dagobah System",
    description: "Strong is this planet with the Force."
  },
  {
    name: "Endor",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/PlanetEndor.jpg",
    address: "Moddell Sector",
    description: "Oh, I told you it was dangerous here!"
  },
  {
    name: "Hoth",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg",
    address: "Anoat Sector",
    description:
      "There isn't enough life on this ice cube to fill a space cruiser!"
  }
];

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Promise.all(
    students.map(student => {
      return Students.create(student);
    })
  );

  await Promise.all(
    campuses.map(campus => {
      return Campuses.create(campus);
    })
  );

  console.log(green("Seeding success!"));
  db.close();
};

seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
