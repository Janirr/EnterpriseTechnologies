package lab.bookings.controllers;

import jakarta.validation.Valid;
import lab.bookings.models.Apartment;
import lab.bookings.repositories.ApartmentRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/apartments")
public class ApartmentController {
    private ApartmentRepository apartmentRepository;

    public ApartmentController(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    @GetMapping()
    public String getAll(Model model) {
        model.addAttribute(new Apartment());
        model.addAttribute("apartments", apartmentRepository.findAll());
        return "apartments";
    }

    @PostMapping()
    public String createTable(@Valid Apartment apartment,
                              Errors errors, Model model) {
        if (errors.hasErrors()) {
            model.addAttribute("apartments", apartmentRepository.findAll());
            return "apartments";
        } else {
            apartmentRepository.save(apartment);
            return "redirect:/apartments";
        }
    }

}
