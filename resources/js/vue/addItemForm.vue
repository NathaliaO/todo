<template>
    <div class="input-group mb-3">
        <input type="text" required class="form-control"  v-model="item.name" placeholder="Enter To Do" aria-label="Enter To Do" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addItem()" :class="[item.name ? 'active' : 'inactive', 'plus']">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
    </button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if (this.item.name == '') {
                return;
            }

            axios.post('api/tasks/store', {
                item: this.item
            }).then(response => {
                if (response.status == 201) {
                    this.item.name == "";
                    this.$emit('reload');
                }
            }).catch (error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
 .addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}
/* input {
    background: white;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}

.plus {
    font-size: 20px;
}
.active {
    color:green
}
.inactive {
    color:brown
}  */
</style>
