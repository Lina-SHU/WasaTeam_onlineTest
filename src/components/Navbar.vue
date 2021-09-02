<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="form-check form-switch me-auto">
        <input class="form-check-input" type="checkbox" id="styleType" @change="toggle = !toggle, $themeType(toggle)">
        <label class="form-check-label" for="styleType">主題切換</label>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to='/' class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feedback" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      toggle: false
    }
  }
}
</script>
