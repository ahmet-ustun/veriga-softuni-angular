import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', zIndex: 2 }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(200%)' }),
                animate('0.8s ease-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.6s ease-out', style({ transform: 'translateY(200%)' }))
            ], { optional: true })
        ])
    ])
]);