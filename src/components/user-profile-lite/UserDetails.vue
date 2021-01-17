<template>
  <div class="card card-small mb-4 pt-3">
    <div class="card-header border-bottom text-center">
      <div class="mb-3 mx-auto"></div>
      <!-- vertical table head example -->
      <table
        v-for="(u, index) in users"
        :key="index"
        class="table table-bordered"
        style="width: 100%"
      >
        <tr>
          <th>ФИО:</th>
          <td>{{ u.name }}</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{{ u.email }}</td>
        </tr>
        <tr>
          <th>Телефон:</th>
          <td>{{ u.phone }}</td>
        </tr>
        <tr>
          <th>Должность:</th>
          <td>{{ u.position }}</td>
        </tr>
        <tr>
          <th>Био:</th>
          <td>{{ u.bio }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-details',
  data() {
    return {
      users: [
        {
          name: 'Екатерина Васильева',
          position: 'Старший эколог',
          bio: 'Закончила КазГУ им. Аль-Фараби, географ - эколог',
          email: 'ekatya2015@mail.ru',
          location: 'ул. Радужная, д. 28',
          phone: '+7702 234 567 80',
          accNumber: '123456789',
        },
      ],
    };
  },
};
</script>