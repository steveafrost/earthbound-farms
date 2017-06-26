<?php

$location = './data/recipes.json';
$data = file_get_contents($location);
$recipes_array = json_decode($data, true);
$recipes = $recipes_array['recipes'];

$HTML = "<div class='recipes' id='recipes'>";

foreach($recipes as $index => $recipe) {
  $recipe_img = $recipe['img'];
  $recipe_title = $recipe['title'];
  $recipe_link = $recipe['link'];

  $HTML .= "<div class='recipe' style='background-image: url(/assets/{$recipe_img});'>";
  $HTML .= "<div class='overlay'>";
  $HTML .= "<h4>{$recipe_title}</h4>";
  $HTML .= "<a href='{$recipe_link}' target='_blank'><img src='/assets/img/symbol-arrow.png' alt='read-more'></a>";
  $HTML .= "</div>";
  $HTML .= "</div>";
}

$HTML .= "<div class='recipe-footer'>";
$HTML .= "<a href='#' class='button'>See All Kale Recipes<img src='/assets/img/symbol-arrow-dark.png'></a>";
$HTML .= "</div>";
$HTML .= "</div>";
$HTML .= "</div>";

echo $HTML;
