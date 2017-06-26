<?php

$location = './data/products.json';
$data = file_get_contents($location);
$products_array = json_decode($data, true);
$products = $products_array['products'];

// var_dump($products);

$HTML = "<div id='product-info'><div class='thumbnails'>";

foreach ($products as $index => $product) {
  $product_img = $product['img'];

  $HTML .= "<div class='thumbnail'>";
  $HTML .= "<img src='/assets/$product_img'>";
  $HTML .= "</div>";
}

$HTML .= '</div>';

foreach ($products as $index => $product) {
  $product_img = $product['img'];
  $product_title = $product['title'];
  $product_desc = $product['desc'];
  $product_avail = $product['avail'][0]; // change to loop if more than one

  $HTML .= "<div class='product'>";
  $HTML .= "<div class='image'>";
  $HTML .= "<img src='/assets/${product_img}'>";
  $HTML .= "</div>";
  $HTML .= "<div class='description'>";
  $HTML .= "<h2>{$product_title}</h2>";
  $HTML .= "<p>{$product_desc}</p>";
  $HTML .= "<p>Available in: <b>{$product_avail}</b></p>";

  if (isset($product['related_text'])) {
    $HTML .= '<p class="suggestion"><a href="' . $product['related_link'] . '" target="_blank">' . $product['related_text'] . '</a></p>';
  }

  $HTML .= '</p>';
  $HTML .= '</div>';
  $HTML .= '</div>';
  $HTML .= '</div>';
}

echo $HTML;

  // function recursiveIterator($array) {
  //   foreach ($array as $key => $value) {
  //     if (is_array($value)) {
  //       recursiveIterator($value);
  //     } else {
  //       echo $key . '=>' . $value . '<br/>';

  //     }
  //   }

  //   unset($value);
  // }

  // recursiveIterator($products);

  // $array_obj = new RecursiveIteratorIterator(new RecursiveArrayIterator($products));