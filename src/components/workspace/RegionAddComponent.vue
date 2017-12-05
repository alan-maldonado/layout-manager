<template>
  <div class="btn-group pull-right">
    <button
      type="button"
      class="btn btn-default dropdown-toggle btn-corner"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Add"
    >
      <span class="glyphicon glyphicon-plus" aria-hidden="true"/>
    </button>
    <div class="dropdown-menu dropdown-corner">
      <li v-for="(component, index) in components" :key="index"
          class="dropdown-menu-link">
        <a
          class="dropdown-menu-link--anchor"
          href="#"
          @click="add(component.component, index)"
        >
          {{ component.name }}
        </a>
        <span class="glyphicon glyphicon-plus absolute-right" aria-hidden="true"/>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    components: {
      type: Array,
      required: true
    }
  },
  methods: {
    add (componentName, index) {
      this.$emit('add', componentName, index)
    }
  }
}
</script>

<style>
.btn-corner {
  position: absolute;
  top: -25px;
  right: -30px;
  border-radius: 50% !important;
  border-color: gray;
  border-width: medium;
  background-color: white !important;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  padding: 1px 0 0 2px;
  z-index: 2;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.btn-group .btn-corner .glyphicon{
  transition: color 0.3s ease-out;
}

.btn-group.open .btn-corner {
  transform: rotate(45deg);
}
.btn-group.open .btn-corner .glyphicon{
  color: gray;
}

.btn-corner .glyphicon {
  color: green;
}
.dropdown-menu.dropdown-corner {
  position: absolute;
  top: -7px;
  right: -3px;
  z-index: 1;
  padding-top: 15px;
}

.dropdown-menu-link {
  position: relative;
}

.dropdown-menu-link--anchor {
  padding-right: 40px !important;
}

.glyphicon-plus.absolute-right {
  position: absolute;
  right: 5px;
  top: 7px;
  color: gray;
  font-size: 10px;
  pointer-events: none;
}
</style>
