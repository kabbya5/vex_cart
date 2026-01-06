export interface Theme {
    
  id: number | null
  name: string
  slug: string | null

  /* Base colors */
  primary_color: string
  secondary_color: string
  accent_color: string

  /* Status colors */
  success_color: string
  warning_color: string
  danger_color: string
  info_color: string

  /* Text & Border */
  text_primary_color: string
  text_secondary_color: string
  border_color: string

  /* Backgrounds */
  body_bg_color: string
  surface_bg_color: string

  /* Navbar */
  navbar_bg_color: string
  navbar_text_color: string
  navbar_hover_color: string
  navbar_active_color: string

  /* Sidebar */
  sidebar_bg_color: string
  sidebar_text_color: string
  sidebar_hover_color: string

  /* Footer */
  footer_bg_color: string
  footer_text_color: string

  /* Button */
  button_primary_bg: string
  button_primary_text: string
  button_primary_hover: string

  button_secondary_bg: string
  button_secondary_text: string
  button_secondary_hover: string
}