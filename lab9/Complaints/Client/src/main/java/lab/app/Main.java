package lab.app;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.GenericType;
import jakarta.ws.rs.core.MediaType;
import lab.dto.ComplaintDTO;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();
        String baseUrl = "http://localhost:8080/Server-1.0-SNAPSHOT/api/complaints";

        // a. Pobierz i wyświetl wszystkie skargi
        List<ComplaintDTO> allComplaints = client
                .target(baseUrl)
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<>() {
                });
        System.out.println("Wszystkie skargi:");
        allComplaints.forEach(c -> System.out.println(c.getId() + ": " + c.getComplaintText() + " [" + c.getStatus() + "]"));

        // b. Pobierz jedną z otwartych skarg (pierwszą)
        ComplaintDTO openComplaint = allComplaints.stream()
                .filter(c -> "open".equalsIgnoreCase(c.getStatus()))
                .findFirst()
                .orElse(null);

        if (openComplaint != null) {
            Long complaintId = openComplaint.getId();
            ComplaintDTO complaint = client
                    .target(baseUrl + "/" + complaintId)
                    .request(MediaType.APPLICATION_JSON)
                    .get(ComplaintDTO.class);
            System.out.println("\nPobrana otwarta skarga (ID=" + complaintId + "):");
            System.out.println(complaint.getComplaintText() + " [" + complaint.getStatus() + "]");

            // c. Zmień status na zamknięty i wyślij PUT
            complaint.setStatus("closed");
            client.target(baseUrl + "/" + complaintId)
                    .request()
                    .put(Entity.entity(complaint, MediaType.APPLICATION_JSON));
            System.out.println("\nZmieniono status skargi (ID=" + complaintId + ") na 'zamknieta'.");
        } else {
            System.out.println("\nBrak otwartych skarg.");
        }

        // d. Pobierz i wyświetl wszystkie otwarte skargi
        List<ComplaintDTO> openComplaints = client
                .target(baseUrl)
                .queryParam("status", "open")
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<>() {
                });
        System.out.println("\nOtwarte skargi po modyfikacji:");
        openComplaints.forEach(c -> System.out.println(c.getId() + ": " + c.getComplaintText() + " [" + c.getStatus() + "]"));

        client.close();
    }
}
