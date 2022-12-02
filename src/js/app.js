const app = {

  init() {
    this.cacheElements();
  },
  cacheElements() {
    this.$buttons = document.querySelectorAll('.btn');
    this.$models = document.querySelectorAll('.model');
    this.$hat = document.querySelector("#hat-model");
    this.$hatBtn = document.querySelector(".hat-btn");
    this.$gasMask = document.querySelector("#gasmask-model");
    this.$gasMaskBtn = document.querySelector(".gasmask-btn");
    this.$lips = document.querySelector("#lips-model");
    this.$lipsBtn = document.querySelector(".lips-btn");
    this.$cartoon = document.querySelector("#cartoon-model");
    this.$cartoonBtn = document.querySelector(".cartoon-btn");
    this.$glasses = document.querySelector("#glasses-model");
    this.$glassesBtn = document.querySelector(".glasses-btn");

    this.toggleFaceFilter(this.$hatBtn, this.$hat);
    this.toggleFaceFilter(this.$gasMaskBtn, this.$gasMask);
    this.toggleFaceFilter(this.$glassesBtn, this.$glasses);
    this.toggleFaceFilter(this.$cartoonBtn, this.$cartoon);
    this.toggleFaceFilter(this.$lipsBtn, this.$lips);
  },
  toggleFaceFilter(activeBtn, activeModel) {
    // Show of remove model when button is clicked
    activeBtn.addEventListener('click', () => {
      if (activeModel.getAttribute("visible", "true")) {
        activeModel.setAttribute("visible", "false");
        // Add class to active button
        activeBtn.classList.remove("btn--active");
      } else {
        activeModel.setAttribute("visible", "true");
        activeBtn.classList.add("btn--active");

        // Remove active button class when model is not displayed
        this.$buttons.forEach(btn => {
          const { name } = btn.dataset;

          if (activeBtn.dataset.name !== name) {
            btn.classList.remove("btn--active");
          }
        });

        // Remove model when another model is displayed
        this.$models.forEach(model => {
          const { name } = model.dataset;

          if (activeModel.dataset.name !== name) {
            model.setAttribute("visible", "false");
          }
        });
      }
    });
  }
};

app.init()