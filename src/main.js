import { fetchImages } from './js/pixabay-api';
import { createImageMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = '';
let page = 1;
const perPage = 40;

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a'); // Ініціалізація SimpleLightbox

// Налаштування iziToast
iziToast.settings({
    position: 'topRight',
    timeout: 5000,
});

form.addEventListener('submit', onSearch);

async function onSearch(e) {
    e.preventDefault();
    query = e.target.elements.searchQuery.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }

    page = 1;
    gallery.innerHTML = '';
    showLoader();

    try {
        const { hits, totalHits } = await fetchImages(query, page, perPage);

        if (!hits.length) {
            iziToast.warning({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query.',
            });
            return;
        }

        gallery.innerHTML = createImageMarkup(hits);
        iziToast.success({
            title: 'Success',
            message: `Found ${totalHits} images!`,
        });

        lightbox.refresh();
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Something went wrong!' });
    } finally {
        form.elements.searchQuery.value = '';
        hideLoader();
    }
}

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}
