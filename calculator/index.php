<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <!-- CSS only -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">

  <script src="ts/main.js" defer></script>
</head>
<body>
  <h1 class="text-capitalize text-center w-100 my-5"><strong>Calculator</strong></h1>

  <div id="calc" class="mx-auto d-block mt-5">
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col-12" id="calc-output">
          <span id="calc-output-box" class="text-right py-2 px-3 d-flex align-items-center justify-content-end"></span>
        </div>
        <div class="col-12" id="calc-buttons">

          <div class="row">
            <div class="col col-3">
              <button class="btn dark" data-value="reset">
                AC
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="+/-">
                +/-
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="%">
                %
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="÷">
                ÷
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col col-3">
              <button class="btn dark" data-value="7">
                7
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="8">
                8
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="9">
                9
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="x">
                x
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col col-3">
              <button class="btn dark" data-value="4">
                4
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="5">
                5
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="6">
                6
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="-">
                -
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col col-3">
              <button class="btn dark" data-value="1">
                1
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="2">
                2
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="3">
                3
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="+">
                +
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col col-6">
              <button class="btn dark" data-value="0">
                0
              </button>
            </div>

            <div class="col col-3">
              <button class="btn dark" data-value=".">
                .
              </button>
            </div>
            <div class="col col-3">
              <button class="btn dark" data-value="result">
                =
              </button>
            </div>
          </div>




        </div>
      </div>
    </div>
  </div>




</body>
</html>