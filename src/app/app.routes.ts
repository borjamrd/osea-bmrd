import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutComponent,
        data: {
            title: 'OSEA',
        },
        children: [
            {
                path: 'home', loadComponent: () =>
                    import(
                        '@modules/home/home.component'
                    ).then((m) => m.HomeComponent),
            },
            {
                path: 'songs',
                loadComponent: () => import('@modules/songs/songs.component').then((m) => m.SongsComponent),
            },
            {
                path: 'songs/add-song',
                loadComponent: () => import('@modules/songs/add-song/add-song.component').then((m) => m.AddSongComponent)
            }, {

                path: 'songs/:id',
                loadComponent: () => import('@modules/songs/song-info/song-info.component').then((m) => m.SongInfoComponent)
            }
            ,
            {
                path: 'artists',
                loadComponent: () =>
                    import(
                        '@modules/artists/artists.component'
                    ).then((m) => m.ArtistsComponent),
            },
            {
                path: 'companies',
                loadComponent: () =>
                    import(
                        '@modules/companies/companies.component'
                    ).then((m) => m.CompaniesComponent),
            },


        ],
    },

    { path: '**', redirectTo: 'home' },
];
