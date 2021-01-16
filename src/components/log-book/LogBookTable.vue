<template>
  <div class="meta-table">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table condensed striped"
      :search-options="{
        enabled: true,
        placeholder: 'Введите текст для поиска',
      }"
      :pagination-options="paginationOptions"
    >
      <div slot="table-actions">
        <router-link to="/add-new-record">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новая запись
          </button>
        </router-link>
        <!-- download doc -->

        <button
          class="btn btn-outline-primary btn-sm mr-2"
          @click.prevent="exportWord"
        >
          <i class="material-icons">cloud_download</i>
        </button>

        <!-- END download doc -->
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <router-link to="/add-new-record">
            <button class="btn-primary btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
// import the vue-good-table styles
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
import '@/assets/scss/meta-table.scss';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default {
  name: 'log-book-table',
  props: {
    rows: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      columns: [
        {
          label: 'Имя',
          field: 'name',
        },
        {
          label: 'Возраст',
          field: 'age',
          type: 'number',
        },
        // {
        //   label: 'Created On',
        //   field: 'createdAt',
        //   type: 'date',
        //   dateInputFormat: 'yyyy-MM-dd',
        //   dateOutputFormat: 'MMM do yy',
        // },
        {
          label: 'Процент',
          field: 'score',
          type: 'percentage',
        },
        {
          label: 'Действия',
          field: 'action',
          sortable: false,
        },
      ],
      paginationOptions: {
        enabled: true,
        mode: 'pages',
        perPage: 5,
        position: 'bottom',
        perPageDropdown: [5, 10, 20],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: '>',
        prevLabel: '<',
        rowsPerPageLabel: 'Строк на странице',
        ofLabel: '/',
        pageLabel: 'стр.', // for 'pages' mode
        allLabel: 'Все',
      },
    };
  },
  methods: {
    // Click export word
    exportWord() {
      let _this = this;
      // Read and get the binary content of the template file
      // Note: The
      // template file is recommended to be placed under the static directory file.
      // When using vue-cli2, put it in the static directory. When using vue-cli3, put it in the public directory.
      // Because when I use it, I put it in the same directory of the .vue file, and I can't read the template.

      JSZipUtils.getBinaryContent('../templates/waste_inventory.docx', function(
        error,
        content,
      ) {
        // input.docx Is a template. When we export, we will export the corresponding data according to this template
        // Throw an exception
        if (error) {
          throw error;
        }
        // Create a JSZip instance with the content of the template
        let zip = new JSZip(content);
        // Create and load docxtemplater instance object
        let doc = new window.docxtemplater().loadZip(zip);
        // handle undefined values in docXTemplater
        doc.setOptions({
          nullGetter: function() {
            return '';
          },
        });
        // Set the value of the template variable
        doc.setData({
          ..._this.rows,
          rows: _this.rows,
          //   name: _this.name,
          //   age: _this.age,
          //   score: _this.score,
        });
        try {
          // Replace all template variables with the values of template variables
          doc.render();
        } catch (error) {
          // Throw an exception
          let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          };
          console.log(JSON.stringify({ error: e }));
          throw error;
        }
        // Generate a zip file representing the docxtemplater object (not a real file, but a representation in memory)
        let out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });
        // Save the target file object as a file of the target type and name it
        saveAs(out, 'waste_inventory.docx');
      });
    },
  },
  components: {
    VueGoodTable,
  },
};
</script>
