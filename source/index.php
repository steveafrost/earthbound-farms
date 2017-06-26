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
        <div class="logo">
          <a href="/"><img src="/assets/img/logo.png" alt="earthbound-farms-logo"></a>
        </div>
        <div class="handwriting">
          <img src="/assets/img/header-text.png" alt="kale-handwritten-text">
        </div>
      </header>

      <nav>
        <li>
         <a href="#product-info">Product Info</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#related">Related</a>
        </li>
      </nav>

      <?php include 'products.php'; ?>

      <?php include 'recipes.php'; ?>

      <div class="related-wrapper">
        <div class="related" id="related">
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
        <a href="#" class="button">
          Learn Our Story
          <img src='/assets/img/symbol-arrow-dark.png'>
        </a>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="./assets/js/scripts.js"></script>
    </div>
  </body>
</html>
