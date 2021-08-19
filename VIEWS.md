# Dashboard

'/'
  - statystyiki z dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

'/login'
- pola na login i hasło
- guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

'/tables'
- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń
  - kazda kolumna będzie jednym stolikiem
  - kazdy wiersz = 30 minut
  - ma przypominac widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa rozne stoliki
  - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
'/tables/booking/:id'
- zawiera wszystkie informacje dotyczące rezerwacji
- umoliwia edycję i zapisanie zmian
'/tables/booking/new'
- analogiczne do powzszej, bez początkowych informacji
'/tables/events/:id'
'/tables/events/new'

# Widok kelnera

'/waiter'
- tabela
  - w wierszach stoliki
  - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie dostępne akcje dla danego stolika

'/waiter/order/new'
- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
- zamówienie (zamówione produkty z opcjami i ceną)
- kwota zamówienia
'/waiter/order/:id'
- jak powyższa
