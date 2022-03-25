<template>
  <section id="descricao-evento" class="ghp">
    <header class="mt-5">
      <h1 class="dark-title">DESCRIÇÃO DO EVENTO</h1>
    </header>
    <main>
      <article class="dark-body-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, qui! Placeat veniam neque provident illo similique vero quod dolores. Maxime accusantium eveniet accusamus. Minus ut inventore, dolor commodi amet provident.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste illum mollitia, vitae nemo animi earum sint nam rerum adipisci voluptatibus, odio ex tempore pariatur qui minima autem dolor. Possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quam eum dolorum, quod cumque quibusdam nulla dolorem in laborum consequatur porro commodi ex esse praesentium a nam officia incidunt aut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas facilis amet doloribus id enim, velit, deserunt quasi deleniti pariatur nam exercitationem earum fugiat aliquam architecto tempora maiores, recusandae magni.
      </article>
    </main>
    <footer class="mb-5">
      <GeneralBtn
        btnText="ACESSAR LINK DO EVENTO"
        :isExternalLink="true"
        link="#"
        bgColor="#48947d"
        width="250px"
        textColor="#fff"
        height="40px"
        id="link-evento"
      />
    </footer>
  </section>

</template>

<script setup lang="ts">
import GeneralBtn from '../../buttons/GeneralBtn.vue';
</script>

<style scoped lang="scss">
  section#descricao-evento {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    main > article {
      font-size: 1rem;
      text-align: justify;
    }
  }
  @media (max-width: 768px) {
    section#descricao-evento {
      header > h1 {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 576px) {
    section#descricao-evento {
      header > h1 {
        font-size: 1rem;
      }
      main > article {
        font-size: 0.8rem;
      }
    }
  }
</style>