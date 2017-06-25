<html>

<?php
  $location = './data/products.json';
  $data = file_get_contents($location);
  $products_array = json_decode($data, true);
  $products = $products_array[products];

  foreach ($products as $product) {
    echo $product['title'];
    echo '/assets/' . $product['img'];
    echo $product['desc'];
    echo $product['avail'][0];
    echo $product['related_text'];
    echo $product['related_link'];
    echo '<br><br>';
  }
?>

</html>
