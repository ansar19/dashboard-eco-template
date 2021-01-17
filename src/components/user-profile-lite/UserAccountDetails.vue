<template>
  <d-card class="card-small mb-4">
    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
            <d-form>
              <d-form-row>
                <!-- First Name -->
                <d-col md="6" class="form-group">
                  <label for="feFirstName">Имя</label>
                  <d-form-input
                    type="text"
                    id="feFirstName"
                    placeholder="First Name"
                    value="Екатерина"
                  />
                </d-col>

                <!-- Last Name -->
                <d-col md="6" class="form-group">
                  <label for="feLastName">Фамилия</label>
                  <d-form-input
                    type="text"
                    id="feLastName"
                    placeholder="Last Name"
                    value="Васильева"
                  />
                </d-col>
              </d-form-row>

              <d-form-row>
                <!-- Email -->
                <d-col md="6" class="form-group">
                  <label for="feEmail">Email</label>
                  <d-form-input
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="ekatya2015@mail.ru"
                  />
                </d-col>

                <!-- Password -->
                <d-col md="6" class="form-group">
                  <label for="fePassword">Пароль</label>
                  <d-form-input
                    type="password"
                    id="fePassword"
                    placeholder="Last Name"
                    value="EX@MPL#P@$$w0RD"
                  />
                </d-col>
              </d-form-row>

              <!-- Address -->
              <div class="form-group">
                <label for="feInputAddress">Адрес</label>
                <d-form-input
                  type="text"
                  id="feInputAddress"
                  placeholder="пример: ул. Радужная, дом 28"
                />
              </div>

              <d-form-row>
                <!-- City -->
                <d-col md="6" class="form-group">
                  <label for="feInputCity">Город</label>
                  <d-form-input type="text" id="feInputCity" />
                </d-col>

                <!-- State -->
                <d-col md="4" class="form-group">
                  <label for="feInputState">Область</label>
                  <d-select :value="null" id="feInputState">
                    <option :value="null" selected>Выберите...</option>
                    <option>...</option>
                  </d-select>
                </d-col>

                <!-- Zip Code -->
                <d-col md="2" class="form-group">
                  <label for="inputZip">Почтовый индекс</label>
                  <input type="text" class="form-control" id="inputZip" />
                </d-col>
              </d-form-row>

              <d-form-row>
                <!-- Description -->
                <d-col md="12" class="form-group">
                  <label for="feDescription">Описание</label>
                  <d-textarea
                    name="feDescription"
                    placeholder="Закончила КазГУ им. Аль-Фараби, географ - эколог"
                    rows="5"
                  ></d-textarea>
                </d-col>
              </d-form-row>

              <d-button type="submit" class="btn-accent"
                >Обновить данные</d-button
              >
            </d-form>
          </d-col>
        </d-row>
      </d-list-group-item>
    </d-list-group>
  </d-card>
</template>

<script>
export default {
  name: 'user-account-details',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'Пользователь',
    },
  },
};
</script>