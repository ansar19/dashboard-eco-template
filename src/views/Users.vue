<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Data Tables</h3>
      </div>
    </div>

    <!-- Users Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Список пользователей</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="meta-table">
              <thead class="bg-light">
                <tr>
                  <th>id</th>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Отчество</th>
                  <th>Должность</th>
                  <th>Телефон</th>
                  <th>email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td data-label="Имя">{{ user.given_name }}</td>
                  <td data-label="Фамилия">{{ user.surname }}</td>
                  <td data-label="Отчество">{{ user.middle_name }}</td>
                  <td data-label="Должность">{{ user.position }}</td>
                  <td data-label="Телефон">{{ user.phone }}</td>
                  <td data-label="email">{{ user.email }}</td>
                  <td>
                    <router-link to="/user-profile">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm mr-2"
                      >
                        Посмотреть
                      </button>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: '16910929 8373',
          given_name: 'Ciaran',
          surname: 'Glenn',
          middle_name: 'Vance',
          position: 'Orci PC',
          phone: '(483) 805-1962',
          email: 'molestie.sodales@non.co.uk',
        },
        {
          id: '16141027 6222',
          given_name: 'Ahmed',
          surname: 'Fuller',
          middle_name: 'Aristotle',
          position: 'Consequat Lectus Sit PC',
          phone: '(408) 103-8496',
          email: 'gravida.nunc@Nullamfeugiatplacerat.ca',
        },
        {
          id: '16421015 7154',
          given_name: 'Inga',
          surname: 'Collins',
          middle_name: 'Jerry',
          position: 'Ridiculus Mus Corporation',
          phone: '(805) 468-4124',
          email: 'erat.semper@in.ca',
        },
        {
          id: '16541010 0654',
          given_name: 'Dale',
          surname: 'Todd',
          middle_name: 'Dieter',
          position: 'Metus In Lorem Institute',
          phone: '(138) 187-4913',
          email: 'justo.Praesent@Integer.edu',
        },
        {
          id: '16450904 7553',
          given_name: 'Adrienne',
          surname: 'Pate',
          middle_name: 'Wing',
          position: 'Erat PC',
          phone: '(719) 306-2230',
          email: 'lorem@dictumeuplacerat.net',
        },
        {
          id: '16330402 4080',
          given_name: 'Edan',
          surname: 'Bennett',
          middle_name: 'Gannon',
          position: 'Integer Corp.',
          phone: '(460) 823-9741',
          email: 'nisl.sem@mollislectuspede.net',
        },
        {
          id: '16381128 0597',
          given_name: 'Kaye',
          surname: 'Levine',
          middle_name: 'Plato',
          position: 'Ornare Libero At LLP',
          phone: '(871) 868-2014',
          email: 'adipiscing.Mauris.molestie@dictumsapien.com',
        },
        {
          id: '16180411 7214',
          given_name: 'Keefe',
          surname: 'Lopez',
          middle_name: 'Kadeem',
          position: 'Ut Institute',
          phone: '(501) 694-9075',
          email: 'vitae.diam.Proin@Uttincidunt.ca',
        },
        {
          id: '16450811 9338',
          given_name: 'Dara',
          surname: 'Ayala',
          middle_name: 'Cullen',
          position: 'Tristique Pellentesque Tellus LLC',
          phone: '(855) 151-9195',
          email: 'vulputate.velit.eu@incursuset.co.uk',
        },
        {
          id: '16641204 8487',
          given_name: 'Scarlett',
          surname: 'Ramsey',
          middle_name: 'Curran',
          position: 'Id Enim Curabitur Company',
          phone: '(395) 848-5526',
          email: 'massa.lobortis.ultrices@sitamet.org',
        },
        {
          id: '16220105 1378',
          given_name: 'Liberty',
          surname: 'Spence',
          middle_name: 'Caldwell',
          position: 'Metus In Industries',
          phone: '(799) 904-1523',
          email: 'eu@imperdiet.com',
        },
        {
          id: '16830301 0642',
          given_name: 'Hadley',
          surname: 'Hernandez',
          middle_name: 'Wesley',
          position: 'Arcu Eu Company',
          phone: '(398) 265-8726',
          email: 'dolor@purussapiengravida.edu',
        },
        {
          id: '16540418 6214',
          given_name: 'Brian',
          surname: 'Tillman',
          middle_name: 'Eagan',
          position: 'Lectus Limited',
          phone: '(308) 141-3035',
          email: 'a.arcu@fermentum.edu',
        },
        {
          id: '16520621 4115',
          given_name: 'Mollie',
          surname: 'Fletcher',
          middle_name: 'Hamilton',
          position: 'Fusce Dolor Quam Associates',
          phone: '(505) 935-7839',
          email: 'sodales.elit@consequat.org',
        },
        {
          id: '16780805 3016',
          given_name: 'Daria',
          surname: 'Armstrong',
          middle_name: 'Ronan',
          position: 'Ridiculus Mus Proin Consulting',
          phone: '(246) 304-7980',
          email: 'adipiscing.fringilla.porttitor@antedictum.edu',
        },
        {
          id: '16050630 8790',
          given_name: 'Mollie',
          surname: 'Sanchez',
          middle_name: 'Kennan',
          position: 'Et Inc.',
          phone: '(425) 669-3065',
          email: 'adipiscing@miDuisrisus.co.uk',
        },
        {
          id: '16351212 3039',
          given_name: 'Brynn',
          surname: 'Calhoun',
          middle_name: 'Adam',
          position: 'Mattis Cras LLC',
          phone: '(476) 288-6727',
          email: 'nulla@aaliquet.org',
        },
        {
          id: '16730226 2444',
          given_name: 'Raphael',
          surname: 'Boone',
          middle_name: 'Basil',
          position: 'Id Risus Inc.',
          phone: '(133) 405-1225',
          email: 'vel.venenatis@lacusEtiambibendum.com',
        },
        {
          id: '16341015 8343',
          given_name: 'Porter',
          surname: 'Knowles',
          middle_name: 'Bernard',
          position: 'Orci Company',
          phone: '(440) 389-0617',
          email: 'nec.diam@adipiscingelit.ca',
        },
        {
          id: '16411021 7991',
          given_name: 'Sydnee',
          surname: 'Dunn',
          middle_name: 'Erich',
          position: 'Libero Est Corp.',
          phone: '(140) 245-3760',
          email: 'lobortis@ligula.edu',
        },
        {
          id: '16180316 0157',
          given_name: 'September',
          surname: 'Garrison',
          middle_name: 'Anthony',
          position: 'Varius Et Euismod Corporation',
          phone: '(842) 204-7454',
          email: 'Nullam.enim.Sed@utpellentesqueeget.ca',
        },
        {
          id: '16180613 5396',
          given_name: 'Beau',
          surname: 'Sellers',
          middle_name: 'Jacob',
          position: 'Convallis Associates',
          phone: '(646) 346-9352',
          email: 'sed@libero.co.uk',
        },
        {
          id: '16480404 0162',
          given_name: 'Melvin',
          surname: 'Jennings',
          middle_name: 'Hall',
          position: 'A PC',
          phone: '(141) 136-3323',
          email: 'ullamcorper@erat.net',
        },
        {
          id: '16230220 3043',
          given_name: 'Zachery',
          surname: 'Cunningham',
          middle_name: 'Walter',
          position: 'Nec Ligula Consectetuer Corporation',
          phone: '(795) 942-7815',
          email: 'vehicula.et.rutrum@nonummyultriciesornare.org',
        },
        {
          id: '16640425 5181',
          given_name: 'Cairo',
          surname: 'Maxwell',
          middle_name: 'Rudyard',
          position: 'Aliquet Phasellus Fermentum LLC',
          phone: '(627) 771-0047',
          email: 'vehicula.risus.Nulla@lacinia.co.uk',
        },
        {
          id: '16840815 9237',
          given_name: 'Charissa',
          surname: 'Ratliff',
          middle_name: 'Aquila',
          position: 'Orci Institute',
          phone: '(792) 809-7459',
          email: 'mauris@magna.org',
        },
      ],
    };
  },
};
</script>
