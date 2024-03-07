import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
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
                loadComponent: () =>
                    import(
                        '@modules/songs/songs.component'
                    ).then((m) => m.SongsComponent),
            },
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

    { path: '**', redirectTo: 'dashboard' },
];
