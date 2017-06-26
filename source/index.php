<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Kale - Earthbound Farms</title>

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/styles.css">
  </head>
  <body>
    <div class="container">
      <header>
        <a href="/"><img src="/assets/img/logo.png" alt="earthbound-farms-logo" class="logo"></a>
        <img src="/assets/img/header-text.png" alt="kale-handwritten-text" class="handwriting">
      </header>

      <nav>
        <li>
         <a href="#product-info"">Product Info</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#related">Related</a>
        </li>
      </nav>

      <?php include 'products.php'; ?>

      <div id="recipes">
        <div class="recipes">
          <div class="recipe" style="background-image: url('/assets/img/recipe-quinoa.jpg'); background-size: cover;">
            <div class="overlay">
              <h4>Kale & Quinoa Salad</h4>
              <a href="#"><img src="/assets/img/symbol-arrow.png" alt="read-more"></a>
            </div>
          </div>
          <div class="recipe" style="background-image: url('/assets/img/recipe-bacon.jpg'); background-size: cover;">
            <div class="overlay">
              <h4>Grilled Greens and Bacon</h4>
              <a href="#"><img src="/assets/img/symbol-arrow.png" alt="read-more"></a>
            </div>
          </div>
          <div class="recipe" style="background-image: url('/assets/img/recipe-sorghum.jpg'); background-size: cover;">
            <div class="overlay">
              <h4>Summer Sorghum and Baby Kale Salad</h4>
              <a href="#"><img src="/assets/img/symbol-arrow.png" alt="read-more"></a>
            </div>
          </div>
          <div class="recipe" style="background-image: url('/assets/img/recipe-polenta.jpg'); background-size: cover;">
            <div class="overlay">
              <h4>Polenta with Kale Saute</h4>
              <a href="#"><img src="/assets/img/symbol-arrow.png" alt="read-more"></a>
            </div>
          </div>

          <div class="recipe-footer">
            <a href="#" class="button">See All Kale Recipes</a>
          </div>
        </div>
      </div>

      <div id="related">
        <div class="related">
          <h2>You May Also Like</h2>
          <div class="product">
            <img src="/assets/img/related-orgkale.jpg" alt="organic-kale">
          </div>
          <div class="product">
            <img src="/assets/img/related-zen.jpg" alt="zen-deep-greens">
          </div>
          <div class="product">
            <img src="/assets/img/related-power.jpg" alt="power-greens">
          </div>
        </div>
      </div>

      <div class="about">
        <h2>Certified Organic for a Healthier Everything</h2>
        <a href="#" class="button">Learn Our Story</a>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="./assets/js/scripts.js"></script>
    </div>
  </body>
</html>
