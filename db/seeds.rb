# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
FactoryGirl.create(
  :user,
  username: "Jane",
  email: "jane@doe.com"
)

FactoryGirl.create(
  :notebook,
  name: "Jane's Notebook",
  user_id: User.first.id
)

User.first.update_attributes(notebook_id: Notebook.first.id)

FactoryGirl.create(
  :notebook,
  name: "Recipes",
  user_id: User.first.id
)

FactoryGirl.create(
  :note,
  title: "Chocolate Chip Cookies",
  content: "INGREDIENTS:  <br><br>1 cup (2 sticks) salted butter, softened <br>  1/2 cup sugar   <br>  1 1/2 cup packed brown sugar   <br>   2 eggs   <br>   2 tsp. vanilla extract   <br>   2 3/4 cups (12 oz) all-purpose flour   <br>  3/4 tsp. smallish-medium coarse sea salt   <br>   1 tsp. baking soda   <br>   1 1/2 tsp. baking powder   <br>   2 1/4 cups semi-sweet chocolate chips  <br><br>INSTRUCTIONS  <br><br>Preheat oven to 360 degrees. Cream butter, sugar, and brown sugar until it is nice and fluffy (approx. 3 minutes on medium-high speed on a K-5). Add both eggs and vanilla and beat for an additional 2 minutes. Add baking soda, baking powder, salt, and flour until cookie batter is fully incorporated. Finally add chocolate chips until well distributed. The cookie batter should be somewhat thick. Drop about 2 tablespoons of dough or use a medium cookie scoop and plop the batter onto a baking sheet lined with parchment paper. Bake for 12-14 minutes until the edges are nice and golden brown. Remove from heat and allow the cookies to stay on the cookie sheet for an additional 2 minutes. Pick up the parchment paper with the cookies still on top and transfer to a cool non-porous surface. Allow the cookies to cool on the paper for at least 3 minutes before serving<br>",
  notebook_id: Notebook.last.id
)

FactoryGirl.create(
  :note,
  title: "Ginger Snaps",
  content: "INGREDIENTS  <br><br>9 1/2 ounces all-purpose flour <br>  1 1/2 teaspoons baking soda  <br>  1 tablespoon ground ginger   <br>   1/2 teaspoon ground cardamom   <br>   1/2 teaspoon ground clove   <br>   1/2 teaspoon kosher salt   <br>   7 ounces dark brown sugar   <br>   5 ounces unsalted butter, at room temperature   <br>   3 ounces molasses, by weight   <br>   1 large egg, at room temperature   <br>   2 teaspoons finely grated fresh ginger   <br>   4 ounces finely chopped candied ginger   <br>   Sanding sugar, for sprinkling, optional  <br><br>  INSTRUCTIONS  <br><br> Preheat the oven to 350 degrees F.  <br>  In a medium mixing bowl whisk together the flour, baking soda, ginger, cardamom, clove and salt.  <br>    <br>Place the brown sugar and butter into the bowl of a stand mixer fitted with the paddle attachment and beat on low speed until light and fluffy, 1 to 2 minutes. Add the molasses, egg and fresh ginger and beat on medium for 1 minute. Add the crystallized ginger and using a rubber spatula, stir to combine. Add the dry ingredients to the wet and stir until well combined.   <br>    <br>With a 2-teaspoon-sized scoop, drop the dough onto a parchment-lined half sheet pan approximately 2 inches apart. Bake on the middle rack of the oven for 12 minutes for slightly chewy cookies or 15 minutes for more crisp cookies. Rotate the pan halfway through cooking.   <br>    <br>Remove from the oven, sprinkle with sanding sugar, if desired, and allow the cookies to stay on the sheet pan for 30 seconds before transferring to a wire rack to cool completely. Repeat with all of the dough. Store in an airtight container for up to 10 days.   <br>  If desired, you may scoop and freeze the cookie dough on a sheet pan and once frozen, place in a resealable bag to store. Bake directly from the freezer as above.  <br><br> ",
  notebook_id: Notebook.last.id
)

FactoryGirl.create(
  :note,
  title: "Apple Pie",
  content: "INGREDIENTS  <br><br>1 recipe pastry for a 9 inch double crust pie    <br>  1/2 cup unsalted butter     <br>  3 tablespoons all-purpose flour     <br>  1/4 cup water     <br>  1/2 cup white sugar     <br>  1/2 cup packed brown sugar     <br>  8 Granny Smith apples - peeled, cored and sliced<br><br>  INSTRUCTIONS  <br><br> Preheat oven to 425 degrees F (220 degrees C). Melt the butter in a saucepan. Stir in flour to form a paste. Add water, white sugar and brown sugar, and bring to a boil. Reduce temperature and let simmer.  <br>  <br>  Place the bottom crust in your pan. Fill with apples, mounded slightly. Cover with a lattice work crust. Gently pour the sugar and butter liquid over the crust. Pour slowly so that it does not run off.  <br>  <br>  Bake 15 minutes in the preheated oven. Reduce the temperature to 350 degrees F (175 degrees C). Continue baking for 35 to 45 minutes, until apples are soft. ",
  notebook_id: Notebook.last.id
)

FactoryGirl.create(
  :note,
  title: "Welcome to Nevernote",
  content: "Nevernote is a web app that allows users to create and organize notes. <br><br>  It was built in 2013 by Nick Willett-Jeffries as a final project for App Academy. The app is a clone of the popular note-taking app, Evernote.<br><br>  In the demo you see here, Jane is using Nevernote to organize a few recipes that she wants to remember for later. Each recipe is stored in its own note and the notes are organized in a notebook, named \"Recipes.\" Jane has also tagged each of the recipes so that she can find all of her cookie or pie recipes easily. <br><br>  Feel free to play around with this demo. Things you might try: <br>  - create a new notebook  <br>  - add some new notes  <br>  - organize your notes using tags<br>",
  notebook_id: Notebook.first.id
)

FactoryGirl.create(
  :tag,
  name: 'cookies',
  user_id: User.first.id
)

FactoryGirl.create(
  :tag,
  name: 'pie',
  user_id: User.first.id
)

Tagging.create(note_id: 1, tag_id: 1)
Tagging.create(note_id: 2, tag_id: 1)
Tagging.create(note_id: 3, tag_id: 2)
