
<script>
export default {
  name: "SelectiveDepthTree",
  props: {
    cheight: String,
    items: Array,
  },
  data() {
    return {
      itemstemp: this.items.reverse(),
    };
  },
  methods: {
    old2new(h, oddele, i) {
      // console.log(i);
      let img = h("img", {
        attrs: { src: this.itemstemp[i].src },
      });
      let input;
      if (i == this.items.length - 1) {
        input = h("input", {
          domProps: {
            type: "radio",
            name: "radio1",
            checked: true,
          },
        });
      } else {
        input = h("input", {
          domProps: {
            type: "radio",
            name: "radio1",
          },
        });
      }

      let span = h("span", {}, this.itemstemp[i].text);

      let figcaption = h("figcaption", {}, [span]);
      let newObj = h("figure", {}, [img, input, figcaption, oddele]);

      return newObj;
    },
  },
  render: function (h) {
    // this.itemstemp = this.items.reverse();
    let first = h("figure", {}, []);
    for (let i = 0; i < this.itemstemp.length; i++) {
      //nested dom 製作
      first = this.old2new(h, first, i);
    }

    let sec = h("div", { class: "ia-container" }, [first]);
    let sec2 = h(
      "div",
      {
        class: "ia-container2",
        style: {
          height: this.cheight,
        },
      },
      [sec]
    );
    let sec3 = h("div", { class: "ia-container3" }, [sec2]);

    return sec3;
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ia-container3 {
  background-color: rgb(192, 44, 18);
}

.ia-container2 {
  background-color: antiquewhite;
  /* height: 300px; */
  width: 715px;
  margin: 20px auto;
  overflow: hidden;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08);
  border: 17px solid rgba(255, 255, 255, 0.6);
}

.ia-container {
  position: relative;
  left: 0px;
  transition: all 1s ease-in-out 0.1s;
  /* overflow: hidden;
        width: 1000px; */
  background-color: rgb(215, 250, 231);
}

.rbar {
  background-color: rgba(85, 75, 61, 0.8);
  position: absolute;
  top: 0;
  right: -10px;
  width: 20px;
  /* just cover visible part */
  height: 100%;
}

.ia-container figure {
  margin: 0;
  background-color: blueviolet;

  position: absolute;
  top: 0;
  left: 50px;
  /* width of visible piece */
  width: 335px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.6);

  transition: all 0.3s ease-in-out;
}

.ia-container > figure {
  margin: 0;
  background-color: rgb(43, 226, 125);

  position: relative;
  left: 0px !important;
}

.ia-container img {
  display: block;
  width: 100%;
}

.ia-container input {
  position: absolute;
  top: 0;
  left: -0px;
  width: 50px;
  /* just cover visible part */
  height: 100%;
  cursor: pointer;
  border: 0;
  padding: 0;

  /* 可調透明度觀察input位置 */
  opacity: 100;
  z-index: 1;

  /* 取消樣式(radio input的圓點) */
  appearance: none;
}

.ia-container input:checked {
  width: 0px;
  left: auto;
  right: 0px;
}

.ia-container input:checked ~ figure {
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  -ms-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  left: 335px;
}

.ia-container figcaption {
  width: 100%;
  height: 100%;
  background: rgba(87, 73, 81, 0.2);
  position: absolute;
  top: 0px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.ia-container figcaption span {
  position: absolute;
  top: 40%;
  margin-top: -30px;
  right: 20px;
  left: 20px;
  overflow: hidden;
  text-align: center;
  background: rgba(87, 73, 81, 0.3);
  line-height: 20px;
  font-size: 18px;
  /* -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0); */
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  padding: 20px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.ia-container input:checked + figcaption {
  background: rgba(87, 73, 81, 0);
}

.ia-container input:checked + figcaption span {
  /* 等0.5秒後,在0.4秒內完成 */
  transition: all 0.4s ease-in-out 0.4s;
  opacity: 1;
  top: 50%;
}

.ia-container input:hover + figcaption {
  background: rgba(87, 73, 81, 0.03);
}

/* @media screen and (max-width: 720px) {
  .ia-container {
    width: 540px;
  }

  .ia-container figure {
    left: 40px;
    width: 260px;
  }

  .ia-container input {
    width: 40px;
  }

  .ia-container input:checked ~ figure {
    left: 260px;
  }

  .ia-container figcaption span {
    font-size: 16px;
  }
}

@media screen and (max-width: 520px) {
  .ia-container {
    width: 320px;
  }

  .ia-container figure {
    left: 20px;
    width: 180px;
  }

  .ia-container input {
    width: 20px;
  }

  .ia-container input:checked ~ figure {
    left: 180px;
  }

  .ia-container figcaption span {
    font-size: 12px;
    letter-spacing: 2px;
    padding: 10px;
    margin-top: -20px;
  }
} */
</style>

