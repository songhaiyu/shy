<template>
  <div class="home">
    <div class="wrapper">
      <div class="header">
        <img src="../assets/note.75134fb0.svg" alt="" />
        <div class="title">To-Do List</div>
      </div>
      <div class="con">
        <h1>~ Today I need to ~</h1>
        <div class="active">
          <input
            class="input"
            type="text"
            placeholder="Add new todo..."
            v-model="input"
            @keydown.13="adddown"
          />
          <button class="submit">
            <span class="clicksubmit" @click="add">Submit</span>
          </button>
        </div>
      </div>

      <ul class="taskList">
        <transition mode="out-in" name="" appear>
          <div v-if="tran">
            <li
              v-for="(item, index) in todos"
              :key="index"
              :class="item.status == true ? 'yel' : ''"
            >
              <input
                type="checkbox"
                :checked="item.status"
                @change="change(index)"
              />
              <span>
                {{ item.name }}
              </span>
              <a href="javascript:void(0);" @click="del(index)">X</a>
            </li>
          </div>
        </transition>
      </ul>
      <div class="activemin" v-if="todos.length != 0">
        <span
          ><span class="first">{{ todos.length }}</span
          >item left</span
        >
        <span @click="all" :class="i == 0 ? 'task' : ''">All</span>
        <span @click="task" :class="i == 1 ? 'task' : ''" v-if="!flag && !show"
          >Acitve</span
        >
        <span
          @click="untask"
          :class="i == 2 ? 'task' : ''"
          v-if="!flag && !show"
          >Completed</span
        >
        <span @click="clear" v-if="!flag">Clear completed</span>
      </div>
      <div class="footer" v-if="todos.length == 0">
        <span class="footer-img">
          <img src="../assets/1669454402133.jpg" alt="" />
        </span>
        <span class="msg">Congrat, you have no more tasks to do</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      todos: [],
      i: 0,
      _todos: [],
      flag: true,
      tran: true,
      show: true,
    };
  },
  methods: {
    // 点击添加
    add() {
      if (this.input == "") {
        alert("添加为空");
      } else {
        let obj = {
          name: this.input,
          status: false,
        };
        this.todos.push(obj);
        this._todos = this.todos;
        this.input = "";
      }
    },
    // 键盘事件
    adddown() {
      this.add();
    },
    // 删除
    del(i) {
      this.todos.splice(i, 1);
    },
    // 批量删除
    clear() {
      this.flag = true;
      this.todos = this.todos.filter((ele) => ele.status == false);
      this._todos = this.todos.filter((ele) => ele.status == false);
    },
    // 状态
    change(i) {
      this.todos[i].status = !this.todos[i].status;
      // this.tran = !this.tran;
      if (this.todos[i].status == true) {
        this.flag = false;
      } else {
        this.flag = true;
      }
      this.flag = this.todos.every((ele) => ele.status == false);
      this.show = this.todos.every((ele) => ele.status == true);
    },
    // 全部
    all() {
      this.i = 0;
      this.todos = this._todos;
    },
    // 未选中
    task() {
      this.i = 1;
      this.todos = this._todos.filter((ele) => ele.status == false);
    },
    // 选中
    untask() {
      this.i = 2;
      this.todos = this._todos.filter((ele) => ele.status == true);
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300);
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 2s ease;
//   // transform: rotateX(180deg);
// }
// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
//   // transform: rotate3d(-360deg);
// }
.yel {
  background-color: #fe7345;
  color: #fff;
  a{
    color: #fff;
  }
  input{
    color: blue;
    background-color: transparent;
  }
}
.task {
  background-color: #fe7345;
  color: #ffff;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  padding: 30px 40px 20px !important;
  box-sizing: border-box;
  text-align: center;
  width: 580px !important;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

img {
  width: 110px;
  height: 110px;
  margin-right: 10px;
}

.header img {
  -o-object-fit: cover;
  object-fit: cover;
  max-width: 100%;
  -webkit-user-drag: none;
  width: 110px;
}

.title {
  transform: rotate(3deg);
  font-size: 16px;
  padding: 8px 16px 3px;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  color: #fff;
  background: #fe7345;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  margin: 20px 0;
  padding: 0;
  font-size: 18px;
}

.input {
  width: 300px;
  outline: none;
  border: none;
  border-bottom: 3px dashed #fe7345;
  padding: 5px 0 3px;
  font-size: 14px;
  background: transparent;
  margin-right: 15px;
}

.active .submit {
  position: relative;
  transform: rotate(4deg);
  outline: none;
  border: none;
  border-radius: 6px;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.active .submit:before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  height: 100%;
  transform: scaleY(1.1);
  border: 1px solid #494a4b;
  border-radius: inherit;
  transform-origin: top;
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
  background-color: #fe7345;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.active .submit span {
  position: relative;
  display: block;
  font-size: 16.5px;
  padding: 4px 12px;
  border: 2px solid #494a4b;
  background-color: transparent;
  cursor: pointer;
  border-radius: inherit;
  background-color: #fff;
}

.active {
  width: 100%;
  margin: 20px auto;
}

.activemin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
}

.activemin span {
  padding: 0 4px;
  border-radius: 4px;
  transition: all 60ms ease-out;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ul {
  width: 500px !important;
  box-sizing: border-box;
  margin-top: 40px;
  perspective: 350px;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding: 0 10px;
}

ul li {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 4px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  /* background-color: #fe7345; */
  margin-bottom: 5px;
}

ul li a {
  color: #000000;
  /* float: right; */
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  right: 4px;
}

ul li span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-right: 7px;
  padding: 0;
  margin: 0;
}

ul li input {
  width: 18px;
  height: 18px;
  // padding: 5px;
  // border-radius: 2px;
  border: 4px solid #000 !important;
  margin-right: 8px;
}

.del {
  text-decoration: line-through;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  /* -webkit-animation: zoom-132cabf7 .45s ease-in-out;
            animation: zoom-132cabf7 .45s ease-in-out; */
}

.msg {
  font-size: 17px;
  padding-top: 5px;
  color: rgba(73, 74, 75, 0.45);
}

.footer-img {
  display: inline-block;
  box-sizing: border-box;
  width: 30px !important;
  padding-top: 3px;
  height: 26px;
  position: relative;
}

.footer-img img {
  width: 22px !important;
  height: 26px !important;
  position: absolute;
  left: 14px;
  top: 4px;
}
</style>
