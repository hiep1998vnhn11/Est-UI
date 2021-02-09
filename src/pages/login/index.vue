<template>
  <vs-row vs-justify="center">
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-w="6"
      vs-sm="12"
    >
      <vs-card>
        <div slot="header"><h3>Hello world !</h3></div>
        <div>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</span
          >
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button
              class="mr-2"
              type="gradient"
              color="danger"
              icon="favorite"
            ></vs-button>
            <vs-button
              class="mr-2"
              color="primary"
              icon="turned_in_not"
            ></vs-button>
            <vs-button
              color="rgb(230,230,230)"
              color-text="rgb(50,50,50)"
              icon="settings"
            ></vs-button>
          </vs-row>
        </div>
        <div
          class="default-input d-flex
          align-items-center"
        >
          <vs-input
            label="Name"
            class="inputx"
            placeholder="Placeholder"
            v-model="fname"
          />
          <vs-input
            type="password"
            label="Password"
            class="inputx ml-3"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'cards',
  data: () => ({
    title: 'Cards',
    defaultcards: false,
    mediacards: false,
    fixheightcards: false,
    hovercards: false,
  }),
};
</script>
